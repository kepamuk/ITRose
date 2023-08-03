export function naturalSort(a: any, b: any): number {
    return typeof a === "string" && typeof b === "string" ? a.localeCompare(b, undefined, { numeric: true }) : a - b;
}
