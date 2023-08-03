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
const json_handle_1 = require("../json.handle");
const rules_1 = require("./rules");
const main = (inputJSON) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const input = yield (0, json_handle_1.readJson)(inputJSON);
        const result = (0, rules_1.processData)(input.data, input.condition);
        const json = JSON.stringify(result);
        yield (0, json_handle_1.writeJson)('./task2/result.json', json);
    }
    catch (e) {
        console.error('An error occurred:', e);
    }
});
// Параментром здесь нужно ввести путь JSON файла
main('./task2/input.json');
