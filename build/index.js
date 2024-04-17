"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkParamType_1 = __importDefault(require("./checkParamType"));
const errors_1 = require("./errors");
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
 * **see: ./baseOperations.md**
 */
class BaseOperations {
    constructor(formatter, validator, dbOps) {
        (0, checkParamType_1.default)("formatter", formatter, "object");
        (0, checkParamType_1.default)("validator", validator, "object");
        (0, checkParamType_1.default)("dbOps", dbOps, "object");
        this.formatter = formatter;
        this.validator = validator;
        this.dbOps = dbOps;
    }
    create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checkParamType_1.default)("input", input, ["object", "array"]);
            // validate, format and write single entity to db
            const errors = yield this.validator.create(input);
            if (errors)
                throw new errors_1.OperationError(400, errors, "Invalid input");
            const entity = yield this.formatter.create(input);
            const singleWriteResult = yield this.dbOps.writeOne(entity);
            return singleWriteResult;
        });
    }
    createMany(input) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checkParamType_1.default)("input", input, ["object", "array"]);
            if (!this.validator.createMany || !this.formatter.createMany) {
                throw new errors_1.NotSupportedError();
            }
            const errorList = yield this.validator.createMany(input);
            if (errorList.some((i) => i != null))
                throw new errors_1.OperationError(400, errorList, "Invalid input");
            const entityList = yield this.formatter.createMany(input);
            const bulkWriteResult = yield this.dbOps.writeMany(entityList);
            return bulkWriteResult;
        });
    }
    update(input) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checkParamType_1.default)("input", input, ["array", "object"]);
            const updateErrors = yield this.validator.update(input);
            if (updateErrors)
                throw new errors_1.OperationError(400, updateErrors, "Invalid input");
            const updatedEntity = yield this.formatter.update(input);
            const updateResult = yield this.dbOps.updateOne(input["_id"], updatedEntity);
            if (updateResult["matchedCount"] == 0)
                throw new errors_1.OperationError(400, { _id: "No entry with given id" });
            return updatedEntity;
        });
    }
    updateMany(input) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checkParamType_1.default)("input", input, ["array", "object"]);
            if (!this.validator.updateMany || !this.formatter.updateMany) {
                throw new errors_1.NotSupportedError();
            }
            const updateErrorList = yield this.validator.updateMany(input);
            if (updateErrorList.some((i) => i != null))
                throw new errors_1.OperationError(400, updateErrorList, "Invalid input");
            const updatedEntityList = yield this.formatter.updateMany(input);
            const updateResults = yield this.dbOps.updateMany(updatedEntityList);
            const successfulUpdates = updateResults.filter(i => i["matchedCount"] > 0);
            if (!successfulUpdates.length)
                throw new errors_1.OperationError(400, { _id: "No entry with given ids" });
            return updatedEntityList;
        });
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
    list() {
        return __awaiter(this, arguments, void 0, function* (filter = {}, resolve = {}, paginationOptions = {}) {
            (0, checkParamType_1.default)("filter", filter, "object");
            (0, checkParamType_1.default)("resolve", resolve, "object");
            (0, checkParamType_1.default)("paginationOptions", paginationOptions, "object");
            if (this.validator.list) {
                const errors = yield this.validator.list(filter, resolve, paginationOptions);
                if (errors)
                    throw new errors_1.OperationError(400, errors, "Invalid input");
            }
            const list = yield this.dbOps.list(filter, resolve, paginationOptions);
            return list;
        });
    }
    /**
     * remove entity
     *
     * validate > remove from db
     *
     * @param {Array<string> | string} id multiple ids in array or single string id
     * @returns {Promise<object>}
     */
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checkParamType_1.default)("id", id, ["string", "object"]);
            if (this.validator.remove) {
                const removeErrors = yield this.validator.remove(id);
                if (removeErrors)
                    throw new errors_1.OperationError(400, removeErrors, "Invalid input");
            }
            let removeResult = yield this.dbOps.removeOne(id);
            if (removeResult["deletedCount"] == 0)
                throw new errors_1.OperationError(400, { id: "no entry with given ID" });
            return { deletedCount: removeResult["deletedCount"] };
        });
    }
    removeMany(id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checkParamType_1.default)("id", id, ["Array"]);
            if (this.validator.removeMany) {
                const removeErrorList = yield this.validator.removeMany(id);
                if (removeErrorList)
                    throw new errors_1.OperationError(400, removeErrorList, "Invalid input");
            }
            let removeResult = yield this.dbOps.removeMany(id);
            if (removeResult["deletedCount"] == 0)
                throw new errors_1.OperationError(400, { id: "no entry with given ID" });
            return { deletedCount: removeResult["deletedCount"] };
        });
    }
}
exports.default = BaseOperations;
