import Joi from "joi";
import BaseDatabaseOps from "mongo-baseops";
import { PaginationOptions } from "mongodb-paginate";
import { WithId, ObjectId } from "mongodb";
import { OperationError } from "./errors";
import { BaseFormatter, BaseSchemaType, BaseValidator, Document } from "./types";

export type * from "./types"

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
 * 8. static extractQuery
 *  * 
 * for detailed documentation
 */




export default class BaseOperations<DocumentType extends Document = any, FilterType extends Document = any> {
    constructor(
        protected db: BaseDatabaseOps,
        protected schema: BaseSchemaType<DocumentType>,
        protected validator: BaseValidator<DocumentType, FilterType>,
        protected formatter: BaseFormatter<DocumentType, FilterType>
    ) { 
        // if no schema throw error
        if (!schema.create || !schema.update || !schema.remove || !schema.list) {
            throw new Error("create schema is required");
        }
    }

    async create(input: DocumentType) {
        const error =
            await this.validate(input, this.schema.create, this.validator.create);
        if (error) {
            throw new OperationError(400, error, "Invalid Input");
        }
        let entity: DocumentType;
        if (this.formatter.create) {
            entity = await this.format(input, this.formatter.create);
        } else {
            entity = input;
        }
        const result = this.db.writeOne(entity);
        return result;
    }

    async createMany(input: DocumentType[]) {
        const error = await this.validate(input, this.schema.create, this.validator.create);
        if (error) {
            throw new OperationError(400, error, "Invalid Input");
        }
        let entity: DocumentType[];
        if (this.formatter.create) {
            entity = await this.format(input, this.formatter.create);
        } else {
            entity = input;
        }
        const result = this.db.writeMany(entity);
        return result;
    }

    async update(input: WithId<DocumentType>) {
        const error = await this.validate(input, this.schema.update, this.validator.update);
        if (error) {
            throw new OperationError(400, error, "Invalid Input");
        }
        let entity: WithId<DocumentType>;
        if (this.formatter.update) {
            entity = await this.format(input, this.formatter.update);
        } else {
            entity = input;
        }
        const result = this.db.updateOne(entity._id, entity);
        return result;
    }

    async updateMany(input: WithId<DocumentType>[]) {
        const error = await this.validate(input, this.schema.update, this.validator.update);
        if (error) {
            throw new OperationError(400, error, "Invalid Input");
        }
        let entity: WithId<DocumentType>[];
        if (this.formatter.update) {
            entity = await this.format(input, this.formatter.update);
        } else {
            entity = input;
        }
        const result = this.db.updateMany(entity as WithId<DocumentType>[]);
        return result;
    }

    async remove(input: ObjectId[]) {
        const error = await this.validate(input, this.schema.remove, this.validator.remove);
        if (error) {
            throw new OperationError(400, error, "Invalid Input");
        }
        let entity: ObjectId[];
        if (this.formatter.remove) {
            entity = await this.format(input, this.formatter.remove);
        } else {
            entity = input;
        }
        const result = this.db.removeMany(entity as ObjectId[]);
        return result;
    }

    async list(input: FilterType, resolve: { [k in keyof DocumentType]: boolean }, paginationOptions: PaginationOptions) {
        const error = await this.validate(input, this.schema.list, this.validator.list);
        if (error) {
            throw new OperationError(400, error, "Invalid Input");
        }
        let entity: FilterType;
        if (this.formatter.list) {
            entity = await this.format(input, this.formatter.list);
        } else {
            entity = input;
        }
        console.log(entity, resolve, paginationOptions)
        const result = this.db.list(entity, resolve, paginationOptions);
        return result;
    }


    protected _joiErrorToObject(ValidationError: Joi.ValidationError) {
        const errorList: Document = {};

        ValidationError.details.forEach(function (detail) {
            errorList[detail.path[0]] = detail.message
        });

        return errorList;
    }

    protected async validate<Input>(
        input: Input | Input[],
        schema?: Joi.Schema<Input>,
        validator?: (input: Input) => Promise<Document | null>,
    ) {
        if (schema) {
            const schemaError = await this.validateSchema(input, schema);
            if (schemaError) {
                return schemaError;
            }
        }
        if (validator) {
            const validationError = await this.validateInput(input, validator);
            if (validationError) {
                return validationError;
            }
        }
        return null;
    }

    protected async validateSchema<Input>(input: Input | Input[], schema: Joi.Schema<Input>) {
        if (Array.isArray(input)) {
            const schemaErrorList = [];
            for (let i of input) {
                const schemaResult = schema.validate(i, { abortEarly: false })
                if (schemaResult.error) {
                    schemaErrorList.push(this._joiErrorToObject(schemaResult.error))
                } else {
                    schemaErrorList.push(null)
                }
            }
            if (schemaErrorList.some(i => i !== null)) {
                return schemaErrorList;
            } else {
                return null;
            }
        } else {
            const schemaResult = schema.validate(input, { abortEarly: false })
            if (schemaResult.error) {
                return this._joiErrorToObject(schemaResult.error);
            } else {
                return null;
            }
        }
    }

    protected async validateInput<Input>(input: Input | Input[], validator: (input: Input) => Promise<Document | null>) {
        if (Array.isArray(input)) {
            const validationErrorList = [];
            for (let unit of input) {
                const validationError = await validator(unit);
                if (validationError) {
                    validationErrorList.push(validationError)
                } else {
                    validationErrorList.push(null)
                }
            }
            if (validationErrorList.some(i => i !== null)) {
                return validationErrorList;
            } else {
                return null;
            }
        } else {
            const validationError = await validator(input);
            if (validationError) {
                return validationError;
            } else {
                return null;
            }
        }
    }

    async format<Input>(input: Input, formatter: (input: Input) => Promise<Input>): Promise<Input>
    async format<Input>(input: Input[], formatter: (input: Input) => Promise<Input>): Promise<Input[]>
    async format<Input>(input: Input | Input[], formatter: (input: Input) => Promise<Input>): Promise<Input | Input[]>
    {
        if (Array.isArray(input)) {
            const formattedList = [];
            for (let unit of input) {
                const formattedInput = await formatter(unit);
                formattedList.push(formattedInput);
            }
            return formattedList;
        } else {
            const formattedInput = await formatter(input);
            return formattedInput;
        }
    }

    static extractQuery(query: Document) {
        const listOption: Document = {};
        const resolveOption: Document = {};

        const paginationOption: PaginationOptions = {
            fetchAll: query["fetchAll"] === "1" ? 1 : 0,
            limit: query["limit"] ? +query["limit"] : 50,
            page: query["page"] ? +query["page"] : 1,
            sort: query["sort"] || "createdAt",
            sortOrder: query["sortOrder"] === "-1" ? -1 : 1
        }

        for (let key in query) {
            if (key.startsWith("resolve")) {
                let resolveKey = key.replace("resolve", "");
                resolveKey = resolveKey.charAt(0).toLowerCase() + resolveKey.slice(1);
                resolveOption[resolveKey] = query[key] === "1";
                continue
            } else if (key !== "fetchAll" && key !== "limit" && key !== "page" && key !== "sort" && key !== "sortOrder") {
                const queryUnformatted = query[key] as string;;
                const queryFormatted = queryUnformatted?.split(",")?.map(i => i.trim()).filter(i => i);
                listOption[key] = queryFormatted;
            }
        }
        return { listOption, resolveOption, paginationOption }
    }
}