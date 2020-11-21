"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVLTree = void 0;
// AVL树节点
class AVLTreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
        this.height = 1;
    }
}
// 平衡状态
const BLANCE_STATE = {
    UNBALANCE_LEFT: 2,
    UNBALANCE_RIGHT: -2,
    SLIGHT_UNBALANCE_LEFT: 1,
    SLIGHT_UNBALANCE_RIGHT: -1,
    BALANCE: 0
};
// AVLTree
class AVLTree {
    constructor() {
        this.length = 0;
        this.root = null;
    }
    _getHeight(node) {
        return node != null ? node.height : 0;
    }
    // 有节点发生位置变化的都要更新Height（旋转）
    _updateHeigh(node) {
        node.height =
            Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1;
        return node;
    }
    _getBalanceState(node) {
        return this._getHeight(node.left) - this._getHeight(node.right);
    }
    // 返回值的高度也变化了，但是返回值统一在blance中改变
    _leftRotate(node) {
        let res = node.right;
        node.right = res.left;
        res.left = this._updateHeigh(node);
        return res;
    }
    // 返回值的高度也变化了，但是返回值统一在blance中改变
    _rightRotate(node) {
        let res = node.left;
        node.left = res.right;
        res.right = this._updateHeigh(node);
        return res;
    }
    // 返回值的高度也变化了，但是返回值统一在blance中改变
    _leftRightRotate(node) {
        node.left = this._updateHeigh(this._leftRotate(node.left));
        return this._rightRotate(node);
    }
    // 返回值的高度也变化了，但是返回值统一在blance中改变
    _rightLeftRotate(node) {
        node.right = this._updateHeigh(this._rightRotate(node.right));
        return this._leftRotate(node);
    }
    insert(val) {
        this.length++;
        this.root = this._insertNode(this.root, val);
    }
    _insertNode(node, val) {
        if (node == null)
            return new AVLTreeNode(val);
        if (node.val == val)
            return node;
        if (node.val < val) {
            node.right = this._insertNode(node.right, val);
        }
        else if (node.val > val) {
            node.left = this._insertNode(node.left, val);
        }
        // 判断是否需要平衡，并进行平衡
        return this._doBalance(node);
    }
    search(val) {
        let node = this.root;
        while (node) {
            if (node.val == val)
                return node;
            else if (node.val < val)
                node = node.right;
            else if (node.val > val)
                node = node.left;
        }
        return null;
    }
    getPre(val) {
        let res = null, node = this.root;
        while (node) {
            if (node.val >= val)
                node = node.left;
            else if (node.val < val) {
                res = node;
                node = node.right;
            }
        }
        return res;
    }
    getNext(val) {
        let res = null, node = this.root;
        while (node) {
            if (node.val <= val)
                node = node.right;
            else if (node.val > val) {
                res = node;
                node = node.left;
            }
        }
        return res;
    }
    remove(val) {
        let node = this.search(val);
        if (node == null || !this.root)
            return false;
        this.length--;
        this.root = this._removeNode(this.root, val);
        return true;
    }
    _removeNode(node, val) {
        if (node.val > val)
            node.left = this._removeNode(node.left, val);
        else if (node.val < val)
            node.right = this._removeNode(node.right, val);
        else if (node.val == val) {
            if (node.left == null)
                return node.right;
            else if (node.right == null)
                return node.left;
            else {
                let next = this.getNext(val);
                node.val = next.val;
                // 转为删除next节点
                node.right = this._removeNode(node.right, node.val);
            }
        }
        return this._doBalance(node);
    }
    _doBalance(node) {
        if (node == null)
            return null;
        const balanceState = this._getBalanceState(node);
        // 左侧偏重
        if (balanceState == BLANCE_STATE.UNBALANCE_LEFT) {
            // 判断是否需要二次旋转
            const leftNodeBalanceState = this._getBalanceState(node.left);
            if (leftNodeBalanceState == BLANCE_STATE.SLIGHT_UNBALANCE_RIGHT) {
                return this._updateHeigh(this._leftRightRotate(node));
            }
            else {
                return this._updateHeigh(this._rightRotate(node));
            }
            // 右侧偏重
        }
        else if (balanceState == BLANCE_STATE.UNBALANCE_RIGHT) {
            // 判断是否需要二次旋转
            const rightNodeBalanceState = this._getBalanceState(node.right);
            if (rightNodeBalanceState == BLANCE_STATE.SLIGHT_UNBALANCE_LEFT) {
                return this._updateHeigh(this._rightLeftRotate(node));
            }
            else {
                return this._updateHeigh(this._leftRotate(node));
            }
        }
        return this._updateHeigh(node);
    }
    min() {
        return this._minNode(this.root);
    }
    _minNode(node) {
        let current = node;
        while (current != null && current.left != null) {
            current = current.left;
        }
        return current;
    }
    max() {
        return this._maxNode(this.root);
    }
    _maxNode(node) {
        let current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }
}
exports.AVLTree = AVLTree;
