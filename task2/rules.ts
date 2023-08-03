// src/index.ts
import { DataItem, Condition } from "./types/interfaces";
import { includeFilter } from "./modules/include";
import { excludeFilter } from "./modules/exclude";
import { sortBy } from "./modules/sort_by";

export function processData(data: DataItem[], condition: Condition): DataItem[] {
    let result: DataItem[] = data;

    if (condition.include) {
        result = includeFilter(result, condition.include);
    }

    if (condition.exclude) {
        result = excludeFilter(result, condition.exclude);
    }

    if (condition.sort_by) {
        result = sortBy(result, condition.sort_by);
    }

    return result;
}


