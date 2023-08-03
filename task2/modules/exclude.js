"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludeFilter = void 0;
function excludeFilter(data, exclude) {
    return data.filter((item) => {
        for (const condition of exclude) {
            if (Object.entries(condition).every(([key, value]) => item[key] === value)) {
                return false;
            }
        }
        return true;
    });
}
exports.excludeFilter = excludeFilter;
