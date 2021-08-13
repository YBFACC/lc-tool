export declare class LinkedEdge {
    head: number[];
    to: number[];
    next: number[];
    vals: number[];
    index: number;
    constructor(n: number);
    add(a: number, b: number, c: number): void;
    search(target: number): number[][];
}
