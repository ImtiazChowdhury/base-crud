import checkParamType from "./checkParamType";
import { ArrayLikeDocument, DbOpsList, Document, FormatterList, ValidatorList } from "./types";

const { OperationError } = require("../lib/util");

/**
 * @class BaseOperations
 * 
 * basic operations of an entity
 * 1. create
 * 2. update
 * 3. list
 * 4. detail
 * 5. remove
 * 
 * all method supports single and batch input
 * 
 * for detailed documentation
 * **see: ./baseOperations.md**
 */

class BaseOperations {

    public formatter: FormatterList
    public validator: ValidatorList
    public dbOps: DbOpsList

    constructor(formatter: FormatterList, validator: ValidatorList, dbOps: DbOpsList) {

        checkParamType("formatter", formatter, "object");
        checkParamType("validator", validator, "object");
        checkParamType("dbOps", dbOps, "object");

        this.formatter = formatter;
        this.validator = validator;
        this.dbOps = dbOps;
    }

    /**
     * @method create
     * creates new entity
     * 
     * validate > format > save to database
     * 
     * input can be object (for single entity creation) of array of objects (for multiple entity creation)
     * 
     * @param {Array<object> | object} input user input
     * @returns {Promise< Array<object> | object >} newly created entity, array if input was for multiple entity, object if single
     */

    async create(input: Document | ArrayLikeDocument) {
        checkParamType("input", input, ["object", "array"])

        // array input are not arrays but number indexed objects
        if (input[0] && !!input[0]) {
            // validate, format and write multiple entities to db

            const errorList = [];
            for (let item in input) {
                const errors = await this.validator.create(input[item]);
                if (errors) errorList.push(errors);
            }
            if (errorList.length) throw new OperationError(400, errorList, "Invalid input");

            let entityList = [];
            for (let item in input) {
                const entity = await this.formatter.create(input[item]);
                entityList.push(entity);
            }

            const writeResults = await this.dbOps.writeMany(entityList);
            return writeResults;

        } else {
            // validate, format and write single entity to db

            const errors = await this.validator.create(input);
            if (errors) throw new OperationError(400, errors, "Invalid input");

            const entity = await this.formatter.create(input);

            const writeResults = await this.dbOps.writeOne(entity);
            return writeResults;
        }
    }

    /**
     * @method update
     * updates an existing entity
     * 
     * validate > format > save to database
     * 
     * input can be object (for single entity update) of array of objects (for multiple entity update)
     * 
     * @param {Array<object> | object} input - user input
     * @returns {Promise <Array<object> | object>} only the part of entity that was updated, array if multiple updated, 
     * object if single
     */
    async update(input: Document | ArrayLikeDocument) {

        checkParamType("input", input, ["array", "object"])


        // array input are not arrays but number indexed objects
        if (!!input[0]) {
            // multiple
            const errorList = [];

            for (let item in input) {
                const errors = await this.validator.update(input[item]);
                if (errors) errorList.push(errors);
            }

            if (errorList.length) throw new OperationError(400, errorList, "Invalid input");

            let entityList = [];
            for (let item in input) {
                const entity = await this.formatter.update(input[item]);
                entity["_id"] = input[item]._id;
                entityList.push(entity);
            }

            const updateResults = await this.dbOps.updateMany(entityList);
            const successfulUpdates = updateResults.filter(i => i["matchedCount"] > 0);

            if (!successfulUpdates.length) throw new OperationError(400, { _id: "No entry with given ids" });

            return entityList;
        } else {
            // single

            const errors = await this.validator.update(input);
            if (errors) throw new OperationError(400, errors, "Invalid input");

            const entity = await this.formatter.update(input);

            const updateResult = await this.dbOps.updateOne(input["_id"], entity);
            if (updateResult["matchedCount"] == 0) throw new OperationError(400, { _id: "No entry with given id" });

            return entity;
        }
    }

    /**
     * list entity by filtering, resolving and paginating
     * 
     * validate > read list from db
     * 
     * for supported filtering, resolving and paginating properties see respective database list operation docs
     * @param {object} filter 
     * @param {object} resolve 
     * @param {object} paginationOptions 
     * @returns {Promise<Array<object>>}
     */
    async list(filter: Document = {}, resolve: Document = {}, paginationOptions: Document = {}) {
        checkParamType("filter", filter, "object");
        checkParamType("resolve", resolve, "object");
        checkParamType("paginationOptions", paginationOptions, "object");


        if (this.validator.list) {
            const errors = await this.validator.list(filter, resolve, paginationOptions);
            if (errors) throw new OperationError(400, errors, "Invalid input");
        }

        const list = await this.dbOps.list(filter, resolve, paginationOptions);
        return list;

    }

    /**
     * get entity detail
     * 
     * validate > read detail from db
     * 
     * @param {Array<string> | string} id 
     * @param {object} resolve - see respective databases read operation docs for supported options
     * @returns {Promise < Array<object> | object>} array if multiple id passed  in array, object if single id string passed
     */
    async detail(id: string, resolve: Document = {}) {
        checkParamType("id", id, ["string", "Array"]);
        checkParamType("resolve", resolve, "object");

        if (this.validator.detail) {
            const errors = await this.validator.detail(id, resolve);
            if (errors) throw new OperationError(400, errors, "Invalid input");
        }

        if (Array.isArray(id)) {
            const results = await this.dbOps.readMany(id, resolve);
            if (!results || !results.length) throw new OperationError(400, { id: "no entry with given IDs" })
            return results;
        }


        const result = await this.dbOps.readOne(id, resolve);
        if (!result) throw new OperationError(400, { id: "no entry with given ID" })
        return result;
    }

    /**
     * remove entity
     * 
     * validate > remove from db
     * 
     * @param {Array<string> | string} id multiple ids in array or single string id
     * @returns {Promise<object>} 
     */
    async remove(id: string | string[]) {
        checkParamType("id", id, ["string", "Array"]);


        if (this.validator.remove) {
            const errors = await this.validator.remove(id);
            if (errors) throw new OperationError(400, errors, "Invalid input");
        }

        let result;

        if (Array.isArray(id)) {
            result = await this.dbOps.removeMany(id);
        } else {
            result = await this.dbOps.removeOne(id);
        }

        if (result["deletedCount"] == 0) throw new OperationError(400, { id: "no entry with given ID" })
        return {
            deletedCount: result["deletedCount"]
        };

    }

}

export default BaseOperations;