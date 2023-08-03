import fs from 'fs';
import path from "path";
import {ConversionRules, IConvertDistance} from "./types/interfaces";


const readConversionRules = (filePath: string): ConversionRules => {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

const rulesFilePath = path.join(__dirname, './rules.json');

export const rules: ConversionRules = readConversionRules(rulesFilePath);


// Основная функция решения задачи
export const convertDistance = (
    distance: { unit: string; value: number },
    convertToUnit: string,
    rules: ConversionRules
): IConvertDistance => {
    const {unit, value} = distance;
    const conversionFactor = rules[unit][convertToUnit];
    const convertedValue = value * conversionFactor;
    return {unit: convertToUnit, value: Math.round(convertedValue * 100) / 100};
}
