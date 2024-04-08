import { Document } from "./types";

class OperationError extends Error {
    public statusCode: number;
    public list: Document;

    constructor(statusCode: number, list: Document, message: string = "Operation Error") {
        super(message)
        this.statusCode = statusCode;
        this.list = list;
    }
}
export default OperationError;