import { Document, IntRange } from "./types";

export class OperationError extends Error {
    public statusCode: number
    public list: Document | Document[]
    constructor(statusCode: IntRange<100, 599>, list: Document | Document[], message: string = "Operation Error") {
        super(message)
        this.statusCode = statusCode;
        this.list = list;
    }
}

export class NotSupportedError extends Error {
    public statusCode: number
    public list: Document | Document[]

    constructor(message: string = "Method Not Supported") {
        super(message)
        this.statusCode = 501;
        this.list = { notSupported: message };
    }
}

