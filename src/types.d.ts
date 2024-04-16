export declare interface Document {
    [key: string]: any;
}
export declare interface inputErrorList {
    [key: string]: any;
}
export declare interface ValidatorList {
    create: (userInput: Document) => inputErrorList | null
    createMany?: (userInputList: Document[]) => inputErrorList[] | null
    update: (userInput: Document) => inputErrorList | null
    updateMany?: (userInputList: Document[]) => inputErrorList[] | null
    list?: (filter: Document, resolve: Document, paginationOptions: Document) => inputErrorList | null
    remove?: (id: string) => inputErrorList | null
    removeMany?: (id: string[]) => inputErrorList[] | null
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

