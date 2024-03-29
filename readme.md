# 刷题数据结构工具

![NPM](https://img.shields.io/npm/l/lc-tool?color=blue&style=flat-square)	![npm](https://img.shields.io/npm/v/lc-tool?logo=npm&style=flat-square)	![npm bundle size](https://img.shields.io/bundlephobia/min/lc-tool?logo=npm&style=flat-square)

方便js，ts写代码，调用时直接有提示补进。

⚠️*ps：ListNode，TreeNode，RunScript均参考[leetcode-class](https://github.com/LoveofRedMoon/LeetCode-Class)这个库。将代码精简并改成typescript。*

如果有错误，欢迎开[issues](https://github.com/YBFACC/lc-tool/issues)。

## 使用方法

ts：

```typescript
import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie } from 'lc-tool';

function topKFrequent(nums: number[], k: number): number[] {
  const heap = new Heap()
  //....
};

topKFrequent(
  //...
)
```

js：

```javascript
const { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie } = require('lc-tool')

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	const heap = new Heap()
	//.....
}

topKFrequent(
  //...
)


```

可以配合vscode的用户片段，快速导入文件中。

## TreeNode
### constructor(*val*?: *number*, *left*?: TreeNode | *null*, *right*?: TreeNode | *null*) 

 构造函数

  ```typescript
const root =new TreeNode(1)
  ```
### TreeNode.create(*arr*: *number*[])
  根据给的Array创建树
  ```typescript
const tree = TreeNode.create([1, 2, 3, 4, 5])
  ```



## ListNode

### constructor(*val*?: *number*, *next*?: ListNode | *null*)

构造函数

```typescript
const listnode = new ListNode()
```

### ListNode.create(*arr*: *number*[])

 根据给的Array创建树

```typescript
const list = ListNode.create([-1, 5, 3, 4, 0]
```



## RunScript

### RunScript(*commonds*: *string*[], *inputs*: *any*[], *classes*: *any*): *any*[]

运行设计类题目。

*commonds*和*inputs*是题目输入的2项

*classes*是需要创建对象的类

```typescript
import { RunScript } from "lc-tool";

class LFUCache {
  //..... 
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// ["LFUCache", "put", "get", "put", "get", "get"]
// [[1], [2, 1], [2], [3, 2], [2], [3]]

RunScript(["LFUCache", "put", "get", "put", "get", "get"]
  , [[1], [2, 1], [2], [3, 2], [2], [3]], LFUCache)

```



## Heap

  堆（优先队列）

1. 默认为**小顶堆**。可以在初始化就插入数组，也可以后面手动使用insert插入

```typescript
const heap1 = new Heap()
const heap2 = new Heap([1,2,3])
```

2. 自定义排序

   \>=:降序（小顶堆）

   \<=:升序（大顶堆）

```typescript
const heap3 = new Heap([], (a, b) => {
  return a >= b
})
```

3. 复杂数据结构

```typescript
const heap3 = new Heap([], (a, b) => {
  if (a[1] === b[1]) {
    return a[0] <= b[0]
  }
  return a[1] <= b[1]
})

```

### offer(data: T):*boolean*

  插入

```typescript
heap3.offer(3)
```

### clear(): *void*

清空堆

### poll(): T | null

  弹出堆首

```typescript
heap3.poll()
```

### remove(*val*: *T*): *boolean*

删除堆中的特定元素（注意删除的时间复杂度是O(n)）

```typescript
heap3.remove(3)
```

### isEmpty(): *boolean*

堆中是否有元素

```typescript
heap3.isEmpty()
```

### peek(): *T* | *null*

得到堆顶的值

```typescript
heap3.peek()
```

### get size(): *number*

得到堆中的元素个数

```typescript
heap3.size
```



## AVLTree
  平衡二叉搜索树

```typescript
class AVLTreeNode {
  val: number
  height: number
  left: AVLTreeNode | null
  right: AVLTreeNode | null
  left_count = 0 //左子树次数的统计
  rihgt_count = 0 //右子树次数的统计
  count = 1 // 当前节点出现的次数
  constructor(val: number) {
    this.val = val
    this.left = this.right = null
    this.height = 1
  }
}
```

```typescript
const avl = new AVLTree()
```

### insert(*val*: *number*):*void*
  插入val

```typescript
avl.insert(2)
avl.insert(3)
avl.insert(1)
```

### getPre(*val*: *number*): AVLTreeNode | *null*
  得到小于x的最大值

```typescript
avl.getNext(2)
```

### getNext(*val*: *number*): AVLTreeNode | *null*
  得到大于x的最小值

```typescript
avl.getPre(2)
```

### remove(*val*: *number*):*boolean*
  移除x

```typescript
avl.remove(2)
```

### search(*val*: *number*): AVLTreeNode | *null*

查找是否已经有val

```typescript
avl.search(2)
```

### min(): AVLTreeNode | *null*

  得到当前最小值

```typescript
avl.min()
```

### max(): AVLTreeNode | *null*
  得到当前最大值

```typescript
avl.max()
```

### length

得到树中的元素个数

```typescript
avl.length
```

### search_count(*val*: *number*): *number*

统计小于val的节点出现次数。

删除节点后，正确性未验证。



## SegmentTree

树状数组，单点更新，区间查询。

使用注意：树状数组下标从1开始。

### constructor(*list*: *number*[] | *number*)

```typescript
const a = [2, 3, 1, 5, 8, 2, 5, 9]

const st1 = new SegmentTree(a)
const st2 = new SegmentTree(a.length)
```

### update(*index*: *number*, *val*: *number*): *void*

更新某个下标的值

### query(*i*: *number*): *number*

得到下标1-i的区间和

```typescript
console.log(st1.query(3))

console.log(st1.update(1, 100))

console.log(st1.query(3))
```



## 链式前向星存图

一种保存图的方法，适合边少的图

### constructor(*n*: *number*) 

初始化存边的数量

### add(*a*: *number*, *b*: *number*, *c*: *number*)

添加边。

### search(*target*: *number*): *number*[][]

查找以target从出发的边。以倒叙输出。



## NumberOfTrailingZeros

计算一个10进制数在2进制下，从最后一个1到末尾的0的个数



## Node

例题[1650. 二叉树的最近公共祖先 III](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/)
[1484. 克隆含随机指针的二叉树](https://leetcode-cn.com/problems/clone-binary-tree-with-random-pointer/)


## 文件目录

```
├─.gitignore
├─LICENSE
├─index.d.ts
├─index.js            入口文件
├─package-lock.json
├─package.json
├─readme.md
├─tsconfig.json       ts编译配置
├─ts                  ts源码
| ├─index.ts
| ├─src
| |  ...
├─src                 编译完成的代码
|  ....
```



