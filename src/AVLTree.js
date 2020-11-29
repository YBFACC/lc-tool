"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVLTree = void 0;
class AVLTreeNode {
    constructor(val) {
        this.left_count = 0;
        this.rihgt_count = 0;
        this.count = 1;
        this.val = val;
        this.left = this.right = null;
        this.height = 1;
    }
}
const BLANCE_STATE = {
    UNBALANCE_LEFT: 2,
    UNBALANCE_RIGHT: -2,
    SLIGHT_UNBALANCE_LEFT: 1,
    SLIGHT_UNBALANCE_RIGHT: -1,
    BALANCE: 0
};
class AVLTree {
    constructor() {
        this.length = 0;
        this.root = null;
    }
    _getHeight(node) {
        return node != null ? node.height : 0;
    }
    _updateHeigh(node) {
        node.height =
            Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1;
        const left = node.left;
        const right = node.right;
        if (left) {
            node.left_count = left.left_count + left.rihgt_count + left.count;
        }
        else {
            node.left_count = 0;
        }
        if (right) {
            node.rihgt_count = right.left_count + right.rihgt_count + right.count;
        }
        else {
            node.rihgt_count = 0;
        }
        return node;
    }
    _getBalanceState(node) {
        return this._getHeight(node.left) - this._getHeight(node.right);
    }
    _RR(node) {
        let res = node.right;
        node.right = res.left;
        res.left = this._updateHeigh(node);
        return res;
    }
    _LL(node) {
        let res = node.left;
        node.left = res.right;
        res.right = this._updateHeigh(node);
        return res;
    }
    _LR(node) {
        node.left = this._updateHeigh(this._RR(node.left));
        return this._LL(node);
    }
    _RL(node) {
        node.right = this._updateHeigh(this._LL(node.right));
        return this._RR(node);
    }
    insert(val) {
        this.length++;
        this.root = this._insertNode(this.root, val);
    }
    _insertNode(node, val) {
        if (node == null)
            return new AVLTreeNode(val);
        if (node.val == val) {
            node.count++;
            return node;
        }
        if (node.val < val) {
            node.right = this._insertNode(node.right, val);
        }
        else if (node.val > val) {
            node.left = this._insertNode(node.left, val);
        }
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
                node.right = this._removeNode(node.right, node.val);
            }
        }
        return this._doBalance(node);
    }
    _doBalance(node) {
        if (node == null)
            return null;
        const balanceState = this._getBalanceState(node);
        if (balanceState == BLANCE_STATE.UNBALANCE_LEFT) {
            const leftNodeBalanceState = this._getBalanceState(node.left);
            if (leftNodeBalanceState == BLANCE_STATE.SLIGHT_UNBALANCE_RIGHT) {
                return this._updateHeigh(this._LR(node));
            }
            else {
                return this._updateHeigh(this._LL(node));
            }
        }
        else if (balanceState == BLANCE_STATE.UNBALANCE_RIGHT) {
            const rightNodeBalanceState = this._getBalanceState(node.right);
            if (rightNodeBalanceState == BLANCE_STATE.SLIGHT_UNBALANCE_LEFT) {
                return this._updateHeigh(this._RL(node));
            }
            else {
                return this._updateHeigh(this._RR(node));
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
    search_count(val) {
        let node = this.root;
        let res = 0;
        while (node) {
            if (node.val < val) {
                res += node.left_count + node.count;
                node = node.right;
            }
            else {
                node = node.left;
            }
        }
        return res;
    }
}
exports.AVLTree = AVLTree;
