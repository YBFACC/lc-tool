export declare class Heap<T> {
    private container;
    protected compare: Function;
    constructor(arr?: T[], fn?: Function);
    insert(data: T): void;
    extract(): T | null;
    swap(arr: T[], i: number, j: number): void;
    isEmpty(): boolean;
    topValue(): T;
    get length(): number;
}
