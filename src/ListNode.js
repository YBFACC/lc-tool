"use strict";
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
    static create(arr) {
        if (!Array.isArray(arr))
            return null;
        const res = new ListNode(null);
        let temp = res;
        for (let i = 0, len = arr.length; i < len; i++)
            temp = temp.next = new ListNode(arr[i]);
        return res.next;
    }
    static createIntersectList(firstArr, secondArr, IntersectArr) {
        if (!Array.isArray(firstArr) ||
            !firstArr.length ||
            !Array.isArray(secondArr) ||
            !secondArr.length ||
            !Array.isArray(IntersectArr))
            return null;
        const f = ListNode.create(firstArr), s = ListNode.create(secondArr), ff = f.getLast(), ss = s.getLast(), i = ListNode.create(IntersectArr);
        ff.next = ss.next = i;
        return [f, s];
    }
    static show(root) {
        if (!(root instanceof ListNode))
            return [];
        const res = [];
        let temp = root;
        while (temp) {
            res.push(temp.val);
            temp = temp.next;
        }
        return res;
    }
    show() {
        if (!(this instanceof ListNode))
            return [];
        const res = [];
        let temp = this;
        while (temp) {
            res.push(temp.val);
            temp = temp.next;
        }
        return res;
    }
    visualShow() {
        console.log(ListNode.show(this).join(' -> '));
    }
    getLast() {
        let root = this;
        while (root.next)
            root = root.next;
        return root;
    }
    static mock(n) {
        const arr = Array(n)
            .fill(0)
            .map((v, i) => i + 1)
            .sort(() => Math.random() < 0.5);
        return ListNode.create(arr);
    }
}
module.exports = ListNode;
