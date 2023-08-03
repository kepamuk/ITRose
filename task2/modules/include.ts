// src/modules/include.ts
import { DataItem } from "../types/interfaces";

export function includeFilter(data: DataItem[], include: DataItem[]): DataItem[] {
    return data.filter((item) => {
        for (const condition of include) {
            if (!Object.entries(condition).every(([key, value]) => item[key] === value)) {
                return false;
            }
        }
        return true;
    });
}
