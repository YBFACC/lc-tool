"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedEdge = void 0;
class LinkedEdge {
    constructor(n) {
        this.head = Array.from({ length: n }, () => -1);
        this.to = Array.from({ length: n }, () => -1);
        this.next = Array.from({ length: n }, () => -1);
        this.vals = Array.from({ length: n }, () => -1);
        this.index = -1;
    }
    add(a, b, c) {
        this.next[++this.index] = this.head[a];
        this.to[this.index] = b;
        this.vals[this.index] = c;
        this.head[a] = this.index;
    }
    search(target) {
        const temp = [];
        for (let i = this.head[target]; i != -1; i = this.next[i]) {
            temp.push([target, this.to[i], this.vals[i]]);
        }
        return temp;
    }
}
exports.LinkedEdge = LinkedEdge;
