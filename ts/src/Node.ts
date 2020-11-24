
/**
 * @description 来源：力扣（LeetCode）链接：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree-iii 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @copyright 2020 LeetCode
 */

export class Node {
  val: number
  left: Node | null
  right: Node | null
  parent: Node | null
  constructor(val?: number, left?: Node | null, right?: Node | null, parent?: Node | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    this.parent = (parent === undefined ? null : parent)
  }
}

