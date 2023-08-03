"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.naturalSort = void 0;
function naturalSort(a, b) {
    return typeof a === "string" && typeof b === "string" ? a.localeCompare(b, undefined, { numeric: true }) : a - b;
}
exports.naturalSort = naturalSort;
