import Joi from "joi";
import { ObjectId, WithId } from "mongodb";

export interface Document {
    [key: string]: any;
}
export interface inputErrorList {
    [key: string]: any;
}
export type BaseSchemaType<DocumentType> = {
    create: Joi.Schema<DocumentType>;
    update: Joi.Schema;
    remove: Joi.Schema;
    list: Joi.Schema;
}

export type BaseValidator<DocumentType, FilterType> = {
    create?: (input: DocumentType) => Promise<DocumentType | null>;
    update?: (input: WithId<DocumentType>) => Promise<WithId<DocumentType> | null>;
    remove?: (input: ObjectId[]) => Promise<any | null>;
    list?: (input: FilterType) => Promise<FilterType | null>;
}

export type BaseFormatter<DocumentType, FilterType> = {
    create?: (input: DocumentType) => Promise<DocumentType>;
    update?: (input: WithId<DocumentType>) => Promise<WithId<DocumentType>>;
    remove?: (input: ObjectId[]) => Promise<ObjectId[]>;
    list?: (input: FilterType) => Promise<FilterType>;
}

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>

export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

