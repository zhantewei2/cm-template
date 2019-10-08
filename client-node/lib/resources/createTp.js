"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cm_zip_1 = require("@ztwx/cm-zip");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
exports.default = (tpName) => __awaiter(void 0, void 0, void 0, function* () {
    const currentPath = process.cwd();
    const vueTp = yield cm_zip_1.fsPromise("readFile", path_1.default.resolve(__dirname, "../../store/vue/template.vue"));
    const resultTp = vueTp.toString().replace(/\${name}/g, tpName);
    const targetDir = path_1.default.resolve(currentPath, tpName);
    if (fs_1.default.existsSync(targetDir))
        return console.error(`${tpName} exists!`);
    yield cm_zip_1.fsPromise("mkdir", targetDir);
    yield cm_zip_1.fsPromise("writeFile", path_1.default.resolve(targetDir, `${tpName}.vue`), resultTp);
    yield cm_zip_1.fsPromise("writeFile", path_1.default.resolve(targetDir, `${tpName}.scss`), "");
    yield cm_zip_1.fsPromise("writeFile", path_1.default.resolve(targetDir, `${tpName}.html`), `
        <main>
            ${tpName} content
        </main>
        `);
});
