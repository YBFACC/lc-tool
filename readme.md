# 刷题数据结构工具

```
+-- index.js 入口文件
+-- package.json npm配置
+-- tsconfig.json ts编译设置
+-- ts  源码
+-- src 编译完的代码
```

## TreeNode
  创建树形结构
  ```typescript
  const root =new TreeNode(1)
  ```
  ### TreeNode.create()
  根据给的Array创建树
  ```typescript
  const tree = TreeNode.create([1, 2, 3, 4, 5])
  ```