// src/modules/sort_by.ts
import { DataItem } from "../types/interfaces";
import { naturalSort } from "../utils/naturalSort";

export function sortBy(data: DataItem[], sortKeys: string[]): DataItem[] {
    return data.sort((a, b) => {
        for (const key of sortKeys) {
            const comparison = naturalSort(a[key], b[key]);
            if (comparison !== 0) {
                return comparison;
            }
        }
        return 0;
    });
}
