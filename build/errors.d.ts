import { Document, IntRange } from "./types";
export declare class OperationError extends Error {
    statusCode: number;
    list: Document | Document[];
    constructor(statusCode: IntRange<100, 599>, list: Document | Document[], message?: string);
}
export declare class NotSupportedError extends Error {
    statusCode: number;
    list: Document | Document[];
    constructor(message?: string);
}
