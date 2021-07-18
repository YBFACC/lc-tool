"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class Node {
    constructor(val, left, right, random, parent, children) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
        this.random = (random === undefined ? null : random);
        this.parent = (parent === undefined ? null : parent);
        this.children = (children === undefined ? [] : children);
    }
}
exports.Node = Node;
