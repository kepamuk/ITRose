// src/modules/exclude.ts
import { DataItem } from "../types/interfaces";

export function excludeFilter(data: DataItem[], exclude: DataItem[]): DataItem[] {
    return data.filter((item) => {
        for (const condition of exclude) {
            if (Object.entries(condition).every(([key, value]) => item[key] === value)) {
                return false;
            }
        }
        return true;
    });
}
