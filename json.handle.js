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
exports.readJson = exports.writeJson = void 0;
const fs_1 = __importDefault(require("fs"));
const writeJson = (path, json) => {
    fs_1.default.writeFile(path, json, 'utf8', (err) => {
        if (err) {
            console.error('Error writing JSON file:', err);
        }
        else {
            console.log('\x1b[32m%s\x1b[0m', `JSON file has been saved. File path is ${path}\n`);
        }
    });
};
exports.writeJson = writeJson;
const readJson = (path) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fs_1.default.promises.readFile(path, 'utf8');
        return JSON.parse(data);
    }
    catch (e) {
        console.log(e);
        throw e;
    }
});
exports.readJson = readJson;
