# 写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么
### diff
> vue和react都是采用diff算法来对比新旧虚拟节点，从而更新节点。在vue的diff函数中。
在交叉对比中，当新节点跟旧节点头尾交叉对比没有结果时，会根据新节点的key去对比旧节点数组中的key，从而找到相应旧节点（这里对应的是一个key => index 的map映射）。
## 参考资料
> [写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/1)