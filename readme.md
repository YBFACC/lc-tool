# 刷题数据结构工具

![NPM](https://img.shields.io/npm/l/lc-tool?color=blue&style=flat-square)	![npm](https://img.shields.io/npm/v/lc-tool?logo=npm&style=flat-square)	![npm bundle size](https://img.shields.io/bundlephobia/min/lc-tool?logo=npm&style=flat-square)

方便js，ts写代码，调用时直接有提示补进。

⚠️*ps：ListNode，TreeNode，RunScript均参考[leetcode-class](https://github.com/LoveofRedMoon/LeetCode-Class)这个库。将代码精简并改成typescript。*

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

### insert(data: T)

  插入

```typescript
	heap3.insert(3)
```

### extract(): T | null
  弹出

```typescript
	heap3.extract()
```

### isEmpty(): *boolean*

堆中是否有元素

```typescript
	heap3.isEmpty()
```

### topValue(): *T*

得到堆顶的值

```typescript
	heap3.topValue()
```

### get length(): *number*

得到堆中的元素个数

```typescript
	heap3.length
```



## AVLTree
  平衡二叉搜索树

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



