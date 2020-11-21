/**
 * @abstract 树状数组抽象类
 */
declare abstract class abstract_SegmentTree {
    protected sum1: number[];
    protected length: number;
    constructor(length: number);
    protected _init(list: number[]): void;
    protected _diffInit(list: number[]): void;
    /**
    * @description 计算lowbit
    * @param x
    */
    protected _lowbit(x: number): number;
    /**
    * @description 更新A[i]，更新所有包含有A[i]位置
    */
    protected _update(index: number, val: number): void;
    /**
    * @description 计算0-i的区间和
    */
    protected _getSum(i: number): number;
    /**
    * @description 计算[x,y]的区间和
    */
    protected _getInterval(start: number, end: number): number;
}
/**
 * @extends 树状数组抽象类
 * @description 单点更新，区间查询
 * @class 树状数组
 */
export declare class SegmentTree extends abstract_SegmentTree {
    constructor(list: number[]);
    update(index: number, val: number): void;
    getInterval(start: number, end: number): number;
}
export {};
