"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.includeFilter = void 0;
function includeFilter(data, include) {
    return data.filter((item) => {
        for (const condition of include) {
            if (!Object.entries(condition).every(([key, value]) => item[key] === value)) {
                return false;
            }
        }
        return true;
    });
}
exports.includeFilter = includeFilter;
