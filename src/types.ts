import { ObjectId } from "mongodb";

export interface Document {
    [key: string]: any;
}
export interface inputErrorList {
    [key: string]: any;
}
export interface ValidatorList {
    create: <T extends Document> (userInput: T) => Promise<inputErrorList | null>
    createMany?: <T extends Document[]>(userInputList: T) => Promise<inputErrorList[] | null[]>
    update: <T extends Document> (userInput: T) => Promise<inputErrorList | null>
    updateMany?: <T extends Document[]>(userInputList: T) => Promise<inputErrorList[] | null[]>
    list?: <T extends Document, U extends Document, V extends Document>(filter: T, resolve: U, paginationOptions: V) => Promise<inputErrorList | null>
    remove?: (id: string | ObjectId | undefined) => Promise<inputErrorList | null>
    removeMany?: (id: Array<string | ObjectId | undefined>) => Promise<inputErrorList[] | null[]>
}

export interface FormatterList {
    create: <T extends Document> (validatedInput: T) => Promise<Document>
    createMany?: <T extends Document[]> (validatedInputList: T) => Promise<Document[]>
    update: <T extends Document> (validatedInput: T) => Promise<Document>
    updateMany?: <T extends Document[]> (validatedInput: T) => Promise<Document[]>
}

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>

export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>