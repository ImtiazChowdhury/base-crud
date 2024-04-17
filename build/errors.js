"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotSupportedError = exports.OperationError = void 0;
class OperationError extends Error {
    constructor(statusCode, list, message = "Operation Error") {
        super(message);
        this.statusCode = statusCode;
        this.list = list;
    }
}
exports.OperationError = OperationError;
class NotSupportedError extends Error {
    constructor(message = "Method Not Supported") {
        super(message);
        this.statusCode = 501;
        this.list = { notSupported: message };
    }
}
exports.NotSupportedError = NotSupportedError;
