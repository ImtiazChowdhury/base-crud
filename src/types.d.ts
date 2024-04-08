/**
     * create a base operation  instance
     * @param {object} formatter
     * @param {function} formatter.create 
     * @param {function} formatter.update
     * 
     * @param {object} validator 
     * @param {function} validator.create
     * @param {function} validator.update
     * @param {function} validator.list
     * @param {function} validator.detail
     * @param {function} validator.remove
     * 
     * @param {object} dbOps 
     * @param {function} dbOps.writeOne
     * @param {function} dbOps.writeMany
     * @param {function} dbOps.updateOne
     * @param {function} dbOps.updateMany
     * @param {function} dbOps.list
     * @param {function} dbOps.readOne
     * @param {function} dbOps.readMany
     * @param {function} dbOps.removeOne
     * @param {function} dbOps.removeMany
     * 
     */

export declare interface Document {
    [key: string]: any;
}
export declare interface ArrayLikeDocument {
    [key: string | number]: any;
}

export declare interface inputErrorList {
    [key: string]: any;
}
export declare interface ValidatorList {
    create: (userInput: Document) => inputErrorList | null
    update: (userInput: Document) => inputErrorList | null
    list?: (filter: Document, resolve: Document, paginationOptions: Document) => inputErrorList | null
    detail?: (id: Array<string> | string, resolve: Document) => inputErrorList | null
    remove?: (id: string | Array<string>) => inputErrorList | null

}

export declare interface FormatterList {
    create: (validatedInput: Document) => Document
    update: (validatedInput: Document) => Document
}

export declare interface DbOpsList {
    writeOne: (formattedInput: Document) => Document
    writeMany: (formattedInput: Array<Document>) => Array<Document>
    updateOne: (id: string, formattedInput: Document) => Document
    updateMany: (formattedInput: Array<Document>) => Array<Document>
    writeMany: (formattedInput: Array<Document>) => Array<Document>
    list: (filter: Document, resolve: Document, paginationOptions: Document) => Array<Document>
    readOne: (id: string, resolve: Document) => Document
    readMany: (id: Array<string>, resolve: Document) => Array<Document>
    removeOne: (id: string) => Document
    removeMany: (id: Array<string>) => Document
}

export declare type DependencyFunctionName = keyof ValidatorList | keyof FormatterList | keyof DbOpsList