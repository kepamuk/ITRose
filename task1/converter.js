"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDistance = exports.rules = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const readConversionRules = (filePath) => {
    const data = fs_1.default.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};
const rulesFilePath = path_1.default.join(__dirname, './rules.json');
exports.rules = readConversionRules(rulesFilePath);
// Основная функция решения задачи
const convertDistance = (distance, convertToUnit, rules) => {
    const { unit, value } = distance;
    const conversionFactor = rules[unit][convertToUnit];
    const convertedValue = value * conversionFactor;
    return { unit: convertToUnit, value: Math.round(convertedValue * 100) / 100 };
};
exports.convertDistance = convertDistance;
