"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processData = void 0;
const include_1 = require("./modules/include");
const exclude_1 = require("./modules/exclude");
const sort_by_1 = require("./modules/sort_by");
function processData(data, condition) {
    let result = data;
    if (condition.include) {
        result = (0, include_1.includeFilter)(result, condition.include);
    }
    if (condition.exclude) {
        result = (0, exclude_1.excludeFilter)(result, condition.exclude);
    }
    if (condition.sort_by) {
        result = (0, sort_by_1.sortBy)(result, condition.sort_by);
    }
    return result;
}
exports.processData = processData;
