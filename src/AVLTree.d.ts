declare class AVLTreeNode {
    val: number;
    height: number;
    left: AVLTreeNode | null;
    right: AVLTreeNode | null;
    constructor(val: number);
}
export declare class AVLTree {
    root: AVLTreeNode | null;
    length: number;
    constructor();
    private _getHeight;
    private _updateHeigh;
    private _getBalanceState;
    private _leftRotate;
    private _rightRotate;
    private _leftRightRotate;
    private _rightLeftRotate;
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
}
export {};
