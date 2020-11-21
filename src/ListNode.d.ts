/**
 * @license MIT
 * @copyright 2018 LoveofRedMoon
 * @class
 */
export declare class ListNode<T> {
    val: T;
    next: ListNode<T> | null;
    constructor(val: T);
    static create<T>(arr: Array<T>): ListNode<null> | null;
    /**
     * @static
     * @param {Array} firstArr
     * @param {Array} secondArr
     * @param {Array} IntersectArr
     * @returns {[ListNode, ListNode]}
     * @memberof ListNode
     */
    static createIntersectList(firstArr: any, secondArr: any, IntersectArr: any): (ListNode<null> | null)[] | null;
    /**
     * @static
     * @param {ListNode} root
     * @returns {Array}
     * @memberof ListNode
     */
    static show(root: any): any[];
    /**
     * @returns {Array}
     * @memberof ListNode
     */
    show(): T[];
    /**
     * 可视化展示
     * @memberof ListNode
     */
    visualShow(): void;
    /**
     * @returns {ListNode}
     * @memberof ListNode
     */
    getLast(): this;
    /**
     * @static
     * @param {Number} n
     * @returns {ListNode}
     * @memberof ListNode
     */
    static mock(n: any): ListNode<null> | null;
}
