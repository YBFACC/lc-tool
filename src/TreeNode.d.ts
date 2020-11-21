/**
 * @class
 * @author 2018 LoveofRedMoon
 * @author 2020 YBFACC
 * @license MIT
 */
export declare class TreeNode<T = any> {
    val: T;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val: T);
    static create<T = any>(arr: T[]): TreeNode<T> | null;
}
