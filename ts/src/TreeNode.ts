/**
 * @class
 * @copyright 2018 LoveofRedMoon
 * @copyright 2020 YBFACC
 * @license MIT
 */

interface treelist {
  [index: number]: null | number
}

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }

  static create(arr: treelist) {
    if (!Array.isArray(arr)) return null
    const res = new TreeNode(arr[0])
    let temp = [res]
    for (let i = 1, len = arr.length; i < len; i += 2) {
      const cur = temp.shift()
      if (!cur) break
      if (arr[i] !== null) temp.push((cur.left = new TreeNode(arr[i])))
      if (i + 1 < len && arr[i + 1] !== null)
        temp.push((cur.right = new TreeNode(arr[i + 1])))
    }
    return res
  }
}

