"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const setting_1 = require("../setting");
const BadException_1 = require("../Exceptions/BadException");
const cm_zip_1 = require("@ztwx/cm-zip");
const path_1 = __importDefault(require("path"));
class Repository {
    constructor() { }
    initRepository() {
        this.userPath = setting_1.iswin ? "/" : process.env["HOME"];
        if (!this.userPath)
            throw new BadException_1.BadException("INIT Repository failure");
        this.repositoryHome = path_1.default.resolve(this.userPath, setting_1.REPOSITORY_NAME);
        this.repositoryLib = path_1.default.resolve(this.repositoryHome, 'lib');
        cm_zip_1.perfectMkdir(this.repositoryHome);
        cm_zip_1.perfectMkdir(this.repositoryLib);
    }
    addToRepository() {
        return true;
    }
    removeFromRepository() {
        return true;
    }
}
exports.Repository = Repository;
