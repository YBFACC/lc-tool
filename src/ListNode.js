"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode = void 0;
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    static create(arr) {
        if (!Array.isArray(arr))
            return null;
        const res = new ListNode();
        let temp = res;
        for (let i = 0, len = arr.length; i < len; i++) {
            temp.next = new ListNode(arr[i]);
            temp = temp.next;
        }
        return res.next;
    }
}
exports.ListNode = ListNode;
