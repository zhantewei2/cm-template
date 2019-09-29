"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winplatforms = ["win32", "win64", "win"];
exports.iswin = winplatforms.includes(process.platform);
exports.REPOSITORY_NAME = ".cm-template";
