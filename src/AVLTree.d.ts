declare class AVLTreeNode {
    val: number;
    height: number;
    left: AVLTreeNode | null;
    right: AVLTreeNode | null;
    left_count: number;
    rihgt_count: number;
    count: number;
    constructor(val: number);
}
export declare class AVLTree {
    private root;
    length: number;
    constructor();
    private _getHeight;
    private _updateHeigh;
    private _getBalanceState;
    private _RR;
    private _LL;
    private _LR;
    private _RL;
    insert(val: number): void;
    private _insertNode;
    search(val: number): AVLTreeNode | null;
    getPre(val: number): AVLTreeNode | null;
    getNext(val: number): AVLTreeNode | null;
    remove(val: number): boolean;
    private _removeNode;
    private _doBalance;
    min(): AVLTreeNode | null;
    private _minNode;
    max(): AVLTreeNode | null;
    private _maxNode;
    search_count(val: number): number;
}
export {};
