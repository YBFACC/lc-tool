export = ListNode;
declare class ListNode {
    static create(arr: any[]): ListNode;
    static createIntersectList(firstArr: any[], secondArr: any[], IntersectArr: any[]): [ListNode, ListNode];
    static show(root: ListNode): any[];
    static mock(n: number): ListNode;
    constructor(val: any);
    val: any;
    next: any;
    show(): any[];
    visualShow(): void;
    getLast(): ListNode;
}
