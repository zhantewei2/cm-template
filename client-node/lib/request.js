"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const baseHeaders = {};
exports.post = (uri, body = "") => new Promise((resolve, reject) => {
    request({
        method: "POST",
        uri,
        headers: Object.assign({ "Content-Type": "application/json" }, baseHeaders),
        body: JSON.stringify(body),
        callback: (err, res, body) => {
            if (err)
                return reject(body);
            return resolve({ res, body });
        }
    });
});
exports.postStream = (uri, body = "") => {
    const req = request({
        method: "POST",
        uri,
        headers: baseHeaders,
        body: JSON.stringify(body)
    });
    return req;
};
exports.get = () => new Promise((resolve, reject) => {
});
