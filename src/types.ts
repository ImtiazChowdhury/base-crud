import { ObjectId } from "mongodb";

export interface Document {
    [key: string]: any;
}
export interface inputErrorList {
    [key: string]: any;
}
export interface ValidatorList {
    create: (userInput: Document) => Promise<inputErrorList | null>
    createMany?: (userInputList: Document[]) => Promise<inputErrorList[] | null[]>
    update: (userInput: Document) => Promise<inputErrorList | null>
    updateMany?: (userInputList: Document[]) => Promise<inputErrorList[] | null[]>
    list?: (filter: Document, resolve: Document, paginationOptions: Document) => Promise<inputErrorList | null>
    remove?: (id: string | ObjectId | undefined) => Promise<inputErrorList | null>
    removeMany?: (id: Array<string | ObjectId | undefined>) => Promise<inputErrorList[] | null[]>
}

export interface FormatterList {
    create: (validatedInput: Document) => Promise<Document>
    createMany?: (validatedInputList: Document[]) => Promise<Document[]>
    update: (validatedInput: Document) => Promise<Document>
    updateMany?: (validatedInput: Document[]) => Promise<Document[]>
}

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>

export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

