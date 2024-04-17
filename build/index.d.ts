import BaseDatabaseOps from "mongo-baseops";
import { Document, FormatterList, ValidatorList } from "./types";
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
 * **see: ./baseOperations.md**
 */
declare class BaseOperations {
    formatter: FormatterList;
    validator: ValidatorList;
    dbOps: BaseDatabaseOps;
    constructor(formatter: FormatterList, validator: ValidatorList, dbOps: BaseDatabaseOps);
    create<T extends Document>(input: T): Promise<T & {
        _id: string;
    }>;
    createMany<T extends Document[]>(input: T): Promise<import("mongodb").OptionalId<import("bson").Document>[]>;
    update<T extends Document>(input: T): Promise<Document>;
    updateMany<T extends Document[]>(input: T): Promise<Document[]>;
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
    list(filter?: Document, resolve?: Document, paginationOptions?: Document): Promise<import("mongodb-paginate/dist/types/types").PaginateResult | import("mongodb-paginate/dist/types/types").EmptyPaginateResult>;
    /**
     * remove entity
     *
     * validate > remove from db
     *
     * @param {Array<string> | string} id multiple ids in array or single string id
     * @returns {Promise<object>}
     */
    remove(id: string | ObjectId): Promise<{
        deletedCount: number;
    }>;
    removeMany(id: Array<string | ObjectId>): Promise<{
        deletedCount: number;
    }>;
}
export default BaseOperations;
