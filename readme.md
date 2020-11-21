# 刷题数据结构工具

![NPM](https://img.shields.io/npm/l/lc-tool?color=blue&style=flat-square)![npm](https://img.shields.io/npm/v/lc-tool?logo=npm&style=flat-square)![npm bundle size](https://img.shields.io/bundlephobia/min/lc-tool?logo=npm&style=flat-square)

方便js写代码，直接调用现成的数据结构.

## TreeNode
  创建二叉树

  ```typescript
  const root =new TreeNode(1)
  ```
  ### TreeNode.create(arr: T[])
  根据给的Array创建树
  ```typescript
  const tree = TreeNode.create([1, 2, 3, 4, 5])
  ```



## Heap

  堆（优先队列）

1. 默认为**小顶堆**。可以在初始化就插入数组，也可以后面手动使用insert插入

```
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

```
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

###   max(): AVLTreeNode | *null*
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
├─ts									ts源码
| ├─index.ts
| ├─src
| |  ...
├─src                 编译完成的代码
|  ....
```



