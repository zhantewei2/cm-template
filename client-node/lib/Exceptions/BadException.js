"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BadException extends Error {
    constructor(msg) {
        super();
        this.msg = msg;
    }
    getMsg() {
        return this.msg;
    }
}
exports.BadException = BadException;
