interface treelist {
    [index: number]: null | number;
}
export declare class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null);
    static create(arr: treelist): TreeNode | null;
}
export {};
