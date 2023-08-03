"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortBy = void 0;
const naturalSort_1 = require("../utils/naturalSort");
function sortBy(data, sortKeys) {
    return data.sort((a, b) => {
        for (const key of sortKeys) {
            const comparison = (0, naturalSort_1.naturalSort)(a[key], b[key]);
            if (comparison !== 0) {
                return comparison;
            }
        }
        return 0;
    });
}
exports.sortBy = sortBy;
