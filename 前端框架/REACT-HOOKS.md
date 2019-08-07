# React-Hooks
## 概念
### 为什么需要Hook
> 1. 在组件间公用状态逻辑很难
> React没用为组件提供将复用性行为附加到组件的途径（例如，将组件连接到store)， providers，consumers，高阶组件，render props 等其他抽象层组成的组件会形成“嵌套地狱”
> 2. 复杂组件变得难以理解
> 我们常常维护一些复杂的组件，这些组件在不同的生命周期里，componentDidMount，componentDidUpdate, componentDidMount都处理着状态逻辑，然后在componentWillUnmount又要将其清除。相互关联且需要对照修改的代码被进行了拆分，而完全不相关的代码却在同一个方法（证明周期）中组合在一起。这是非常不合理的一件事。
> 所以我们时常把React和一些状态管理库一起结合使用，但是这往往引入了很多的抽象概念，导致你需要在不同文件间切换，使得复用逻辑变得更加困难。
> 3. 较难上手的class模式
> class 是学习 React 的一大屏障。你必须去理解 JavaScript 中 this 的工作方式，这与其他语言存在巨大差异。还不能忘记绑定事件处理器。没有稳定的语法提案，这些代码非常冗余。对于函数组件与 class 组件的差异也存在分歧，甚至还要区分两种组件的使用场景。
> class 也给目前的工具带来了一些问题。例如，class 不能很好的压缩，并且会使热重载出现不稳定的情况。
> Hook 使你在非 class 的情况下可以使用更多的 React 特性。
## 参考资料
> REACT-HOOK [REACT-HOOK官方文档](https://zh-hans.reactjs.org/docs/hooks-intro.html)

> [REACT-HOOK深入不浅出](https://zhuanlan.zhihu.com/p/50099963)

> [Egg + React + SSR同构开发](http://ykfe.net/guide/isomorphism.html)