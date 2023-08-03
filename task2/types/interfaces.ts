// src/types/interfaces.ts
export interface DataItem {
    [key: string]: any;
}

export interface Condition {
    include?: DataItem[];
    exclude?: DataItem[];
    sort_by?: string[];
}
