#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./setting");
const Repository_1 = require("./repository/Repository");
const request_1 = require("./request");
const repository = new Repository_1.Repository();
repository.initRepository();
const is = request_1.postStream("http://localhost:3000", { a: 1 });
is.on("data", chunk => {
    console.log(chunk);
});
