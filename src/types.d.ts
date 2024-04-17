import BaseDatabaseOps from "mongo-baseops";
import { ObjectId } from "mongodb";

export declare interface Document {
    [key: string]: any;
}
export declare interface inputErrorList {
    [key: string]: any;
}
export declare interface ValidatorList {
    create: (userInput: Document) => Primise<inputErrorList | null>
    createMany?: (userInputList: Document[]) => Primise<inputErrorList[] | null[]>
    update: (userInput: Document) => Primise<inputErrorList | null>
    updateMany?: (userInputList: Document[]) => Primise<inputErrorList[] | null[]>
    list?: (filter: Document, resolve: Document, paginationOptions: Document) => Primise<inputErrorList | null>
    remove?: (id: string | ObjectId) => Primise<inputErrorList | null>
    removeMany?: (id: Array<string | ObjectId>) => Primise<inputErrorList[] | null[]>
}

export declare interface FormatterList {
    create: (validatedInput: Document) => Promise<Document>
    createMany?: (validatedInputList: Document[]) => Promise<Document[]>
    update: (validatedInput: Document) => Promise<Document>
    updateMany?: (validatedInput: Document[]) => Promise<Document[]>
}

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>

export declare type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

