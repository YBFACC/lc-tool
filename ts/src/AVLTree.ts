
// AVL树节点
class AVLTreeNode {
  val: number
  height: number
  left: AVLTreeNode | null
  right: AVLTreeNode | null
  constructor(val: number) {
    this.val = val
    this.left = this.right = null
    this.height = 1
  }
}
// 平衡状态
const BLANCE_STATE = {
  UNBALANCE_LEFT: 2,
  UNBALANCE_RIGHT: -2,
  SLIGHT_UNBALANCE_LEFT: 1,
  SLIGHT_UNBALANCE_RIGHT: -1,
  BALANCE: 0
}
// AVLTree
export class AVLTree {
  private root: AVLTreeNode | null
  length = 0
  constructor() {
    this.root = null
  }

  private _getHeight(node: AVLTreeNode | null): number {
    return node != null ? node.height : 0
  }

  // 有节点发生位置变化的都要更新Height（旋转）
  private _updateHeigh(node: AVLTreeNode): AVLTreeNode {
    node.height =
      Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1
    return node
  }

  private _getBalanceState(node: AVLTreeNode): number {
    return this._getHeight(node.left) - this._getHeight(node.right)
  }

  // 返回值的高度也变化了，但是返回值统一在blance中改变
  private _leftRotate(node: AVLTreeNode): AVLTreeNode {
    let res = node.right as AVLTreeNode
    node.right = res.left
    res.left = this._updateHeigh(node)
    return res
  }
  // 返回值的高度也变化了，但是返回值统一在blance中改变
  private _rightRotate(node: AVLTreeNode): AVLTreeNode {
    let res = node.left as AVLTreeNode
    node.left = res.right
    res.right = this._updateHeigh(node)
    return res
  }
  // 返回值的高度也变化了，但是返回值统一在blance中改变
  private _leftRightRotate(node: AVLTreeNode) {
    node.left = this._updateHeigh(this._leftRotate(node.left as AVLTreeNode))
    return this._rightRotate(node)
  }
  // 返回值的高度也变化了，但是返回值统一在blance中改变
  private _rightLeftRotate(node: AVLTreeNode) {
    node.right = this._updateHeigh(this._rightRotate(node.right as AVLTreeNode))
    return this._leftRotate(node)
  }

  insert(val: number):void {
    this.length++
    this.root = this._insertNode(this.root, val)
  }

  private _insertNode(node: AVLTreeNode | null, val: number): AVLTreeNode {
    if (node == null) return new AVLTreeNode(val)
    if (node.val == val) return node
    if (node.val < val) {
      node.right = this._insertNode(node.right, val)
    } else if (node.val > val) {
      node.left = this._insertNode(node.left, val)
    }
    // 判断是否需要平衡，并进行平衡
    return this._doBalance(node) as AVLTreeNode
  }

  search(val: number): AVLTreeNode | null {
    let node = this.root
    while (node) {
      if (node.val == val) return node
      else if (node.val < val) node = node.right
      else if (node.val > val) node = node.left
    }
    return null
  }

  getPre(val: number): AVLTreeNode | null {
    let res = null,
      node = this.root
    while (node) {
      if (node.val >= val) node = node.left
      else if (node.val < val) {
        res = node
        node = node.right
      }
    }
    return res
  }

  getNext(val: number): AVLTreeNode | null {
    let res = null,
      node = this.root
    while (node) {
      if (node.val <= val) node = node.right
      else if (node.val > val) {
        res = node
        node = node.left
      }
    }
    return res
  }

  remove(val: number):boolean {
    let node = this.search(val)
    if (node == null || !this.root) return false
    this.length--
    this.root = this._removeNode(this.root, val)
    return true
  }

  private _removeNode(node: AVLTreeNode, val: number) {
    if (node.val > val) node.left = this._removeNode(node.left as AVLTreeNode, val)
    else if (node.val < val) node.right = this._removeNode(node.right as AVLTreeNode, val)
    else if (node.val == val) {
      if (node.left == null) return node.right
      else if (node.right == null) return node.left
      else {
        let next = this.getNext(val) as AVLTreeNode
        node.val = next.val
        // 转为删除next节点
        node.right = this._removeNode(node.right, node.val)
      }
    }
    return this._doBalance(node)
  }

  private _doBalance(node: AVLTreeNode | null): AVLTreeNode | null {
    if (node == null) return null
    const balanceState = this._getBalanceState(node)
    // 左侧偏重
    if (balanceState == BLANCE_STATE.UNBALANCE_LEFT) {
      // 判断是否需要二次旋转
      const leftNodeBalanceState = this._getBalanceState(node.left as AVLTreeNode)
      if (leftNodeBalanceState == BLANCE_STATE.SLIGHT_UNBALANCE_RIGHT) {
        return this._updateHeigh(this._leftRightRotate(node) as AVLTreeNode)
      } else {
        return this._updateHeigh(this._rightRotate(node) as AVLTreeNode)
      }
      // 右侧偏重
    } else if (balanceState == BLANCE_STATE.UNBALANCE_RIGHT) {
      // 判断是否需要二次旋转
      const rightNodeBalanceState = this._getBalanceState(node.right as AVLTreeNode)
      if (rightNodeBalanceState == BLANCE_STATE.SLIGHT_UNBALANCE_LEFT) {
        return this._updateHeigh(this._rightLeftRotate(node) as AVLTreeNode)
      } else {
        return this._updateHeigh(this._leftRotate(node) as AVLTreeNode)
      }
    }
    return this._updateHeigh(node)
  }

  min(): AVLTreeNode | null {
    return this._minNode(this.root)
  }
  private _minNode(node: AVLTreeNode | null): AVLTreeNode | null {
    let current = node
    while (current != null && current.left != null) {
      current = current.left
    }
    return current
  }
  max(): AVLTreeNode | null {
    return this._maxNode(this.root)
  }

  private _maxNode(node: AVLTreeNode | null): AVLTreeNode | null {
    let current = node
    while (current != null && current.right != null) {
      current = current.right
    }
    return current
  }
}