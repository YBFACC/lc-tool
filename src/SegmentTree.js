"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentTree = void 0;
class abstract_SegmentTree {
    constructor(length) {
        this.length = length;
        this.sum1 = new Array(length).fill(0);
    }
    _init(list) {
        for (let i = 0; i < list.length; i++) {
            this._update(i, list[i]);
        }
    }
    _diffInit(list) {
        this._update(0, list[0]);
        for (let i = 1; i < list.length; i++) {
            this._update(i, list[i] - list[i - 1]);
        }
    }
    _lowbit(x) { return x & (-x); }
    _update(index, val) {
        const length = this.length;
        const sum1 = this.sum1;
        index++;
        while (index <= length) {
            sum1[index] += val;
            index += this._lowbit(index);
        }
    }
    _getSum(i) {
        const sum1 = this.sum1;
        i++;
        let res = 0;
        while (i > 0) {
            res += sum1[i];
            i -= this._lowbit(i);
        }
        return res;
    }
    _getInterval(start, end) {
        return this._getSum(end) - this._getSum(start - 1);
    }
}
class SegmentTree extends abstract_SegmentTree {
    constructor(list) {
        super(list.length);
        this._init(list);
    }
    update(index, val) {
        return this._update(index, val);
    }
    getInterval(start, end) {
        return this._getInterval(start, end);
    }
}
exports.SegmentTree = SegmentTree;
class diff_SegmentTree extends abstract_SegmentTree {
    constructor(list) {
        super(list.length);
        this._diffInit(list);
    }
    updateInterval(x, y, val) {
        this._update(x, val);
        this._update(y + 1, -val);
    }
    getIndex(i) {
        return this._getSum(i);
    }
}
class two_SegmentTree extends abstract_SegmentTree {
    constructor(list) {
        super(list.length);
        this.sum2 = new Array(10000).fill(0);
        this._diffInit(list);
    }
    _update(index, val) {
        index++;
        let x = index;
        const length = this.length;
        const sum1 = this.sum1;
        const sum2 = this.sum2;
        while (index < length) {
            sum1[index] += val;
            sum2[index] += val * (x - 1);
            index += this._lowbit(index);
        }
    }
    _getSum(i) {
        const sum1 = this.sum1;
        const sum2 = this.sum2;
        i++;
        let x = i;
        let res = 0;
        while (i > 0) {
            res += sum1[i] * x - sum2[i];
            i -= this._lowbit(i);
        }
        return res;
    }
    getInterval(start, end) {
        return this._getInterval(start, end);
    }
    updateInterval(x, y, val) {
        this._update(x, val);
        this._update(y + 1, -val);
    }
}
