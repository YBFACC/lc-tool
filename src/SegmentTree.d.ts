declare abstract class abstract_SegmentTree {
    protected sum1: number[];
    protected length: number;
    constructor(length: number);
    protected _init(list: number[]): void;
    protected _diffInit(list: number[]): void;
    protected _lowbit(x: number): number;
    protected _update(index: number, val: number): void;
    protected _getSum(i: number): number;
}
export declare class SegmentTree extends abstract_SegmentTree {
    constructor(list: number[] | number);
    update(index: number, val: number): void;
    query(i: number): number;
}
export {};
