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
Object.defineProperty(exports, "__esModule", { value: true });
// Пример использования
const search_1 = require("./search");
const json_handle_1 = require("../json.handle");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = (0, search_1.findUnknownPoint)();
        const json = JSON.stringify(result);
        yield (0, json_handle_1.writeJson)('./task3/result.json', json);
    }
    catch (e) {
        console.error('An error occurred:', e);
    }
});
main();