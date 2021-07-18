export declare class Heap<T> {
    private container;
    protected compare: Function;
    constructor(arr?: T[], fn?: Function);
    offer(data: T): boolean;
    clear(): void;
    poll(): T | null;
    remove(val: T): boolean;
    private removeAt;
    private swap;
    isEmpty(): boolean;
    peek(): T | null;
    get size(): number;
}
