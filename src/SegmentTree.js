"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentTree = void 0;
class abstract_SegmentTree {
    constructor(length) {
        this.length = length + 1;
        this.sum1 = new Array(this.length).fill(0);
    }
    _init(list) {
        for (let i = 0; i < list.length; i++) {
            this._update(i + 1, list[i]);
        }
    }
    _diffInit(list) {
        this._update(1, list[0]);
        for (let i = 1; i < list.length; i++) {
            this._update(i + 1, list[i] - list[i - 1]);
        }
    }
    _lowbit(x) { return x & (-x); }
    _update(index, val) {
        const length = this.length;
        const sum1 = this.sum1;
        while (index <= length) {
            sum1[index] += val;
            index += this._lowbit(index);
        }
    }
    _getSum(i) {
        const sum1 = this.sum1;
        let res = 0;
        while (i > 0) {
            res += sum1[i];
            i -= this._lowbit(i);
        }
        return res;
    }
}
class SegmentTree extends abstract_SegmentTree {
    constructor(list) {
        super(Array.isArray(list) ? list.length : list);
        if (Array.isArray(list)) {
            this._init(list);
        }
    }
    update(index, val) {
        return this._update(index, val);
    }
    query(i) {
        return this._getSum(i);
    }
}
exports.SegmentTree = SegmentTree;
