import BaseDatabaseOps from "mongo-baseops";
import checkParamType from "./checkParamType";
import { Document, FormatterList, ValidatorList, inputErrorList } from "./types";
import { NotSupportedError, OperationError } from "./errors";
import { ObjectId } from "mongodb";

/**
 * @class BaseOperations
 * 
 * basic operations of an entity
 * 1. create
 * 2. Create Many
 * 3. update
 * 4. updateMany
 * 5. list
 * 6. remove
 * 7. removeMany
 *  * 
 * for detailed documentation
 */

class BaseOperations {

    public formatter: FormatterList
    public validator: ValidatorList
    public dbOps: BaseDatabaseOps

    constructor(formatter: FormatterList, validator: ValidatorList, dbOps: BaseDatabaseOps) {

        checkParamType("formatter", formatter, "object");
        checkParamType("validator", validator, "object");
        checkParamType("dbOps", dbOps, "object");

        this.formatter = formatter;
        this.validator = validator;
        this.dbOps = dbOps;
    }



    async create<T extends Document>(input: T) {
        checkParamType("input", input, ["object", "array"])

        // validate, format and write single entity to db

        const errors = await this.validator.create(input);
        if (errors) throw new OperationError(400, errors, "Invalid input");

        const entity = await this.formatter.create(input);

        const singleWriteResult = await this.dbOps.writeOne(entity);
        return singleWriteResult;
    }



    async createMany<T extends Document[]>(input: T) {
        checkParamType("input", input, ["object", "array"])

        if (!this.validator.createMany || !this.formatter.createMany) {
            throw new NotSupportedError();
        }

        const errorList = await this.validator.createMany(input);
        if (errorList.some((i: inputErrorList | null) => i != null)) throw new OperationError(400, errorList, "Invalid input");

        const entityList = await this.formatter.createMany(input);

        const bulkWriteResult = await this.dbOps.writeMany(entityList);
        return bulkWriteResult;
    }



    async update<T extends Document>(input: T) {

        checkParamType("input", input, ["array", "object"])

        const updateErrors = await this.validator.update(input);
        if (updateErrors) throw new OperationError(400, updateErrors, "Invalid input");

        const updatedEntity = await this.formatter.update(input);

        const updateResult = await this.dbOps.updateOne(input["_id"], updatedEntity);
        if (updateResult["matchedCount"] == 0) throw new OperationError(400, { _id: "No entry with given id" });

        return updatedEntity;
    }



    async updateMany<T extends Document[]>(input: T) {

        checkParamType("input", input, ["array", "object"])

        if (!this.validator.updateMany || !this.formatter.updateMany) {
            throw new NotSupportedError();
        }

        const updateErrorList = await this.validator.updateMany(input);
        if (updateErrorList.some((i: inputErrorList | null) => i != null)) throw new OperationError(400, updateErrorList, "Invalid input");

        const updatedEntityList = await this.formatter.updateMany(input);
        const updateResults = await this.dbOps.updateMany(updatedEntityList);

        const successfulUpdates = updateResults.filter(i => i["matchedCount"] > 0);

        if (!successfulUpdates.length) throw new OperationError(400, { _id: "No entry with given ids" });

        return updatedEntityList;
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
     * remove entity
     * 
     * validate > remove from db
     * 
     * @param {Array<string> | string} id multiple ids in array or single string id
     * @returns {Promise<object>} 
     */
    async remove(id: string | ObjectId) {
        checkParamType("id", id, ["string", "object"]);

        if (this.validator.remove) {
            const removeErrors = await this.validator.remove(id);
            if (removeErrors) throw new OperationError(400, removeErrors, "Invalid input");
        }

        let removeResult = await this.dbOps.removeOne(id);

        if (removeResult["deletedCount"] == 0) throw new OperationError(400, { id: "no entry with given ID" })

        return { deletedCount: removeResult["deletedCount"] };

    }



    async removeMany(id: Array<string | ObjectId>) {
        checkParamType("id", id, ["Array"]);

        if (this.validator.removeMany) {
            const removeErrorList = await this.validator.removeMany(id);
            if (removeErrorList) throw new OperationError(400, removeErrorList, "Invalid input");
        }

        let removeResult = await this.dbOps.removeMany(id);

        if (removeResult["deletedCount"] == 0) throw new OperationError(400, { id: "no entry with given ID" })
        return { deletedCount: removeResult["deletedCount"] };
    }
}

export default BaseOperations;