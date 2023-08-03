export interface Point3D {
    x: number;
    y: number;
    z: number;
}

export interface SearchResult {
    point: Point3D;
    calls: number;
}
