/**
 * @license MIT
 * @copyright 2018 LoveofRedMoon
 * @copyright 2020 YBFACC
 * @class
 */
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  static create(arr: number[]) {
    if (!Array.isArray(arr)) return null
    const res = new ListNode()
    let temp = res
    for (let i = 0, len = arr.length; i < len; i++) {
      temp.next = new ListNode(arr[i])
      temp = temp.next
    }
    return res.next
  }
}

