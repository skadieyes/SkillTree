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
## 概览
### State Hook
> Hook 是能让你在函数组件中“钩入” React 特性的函数。它们名字通常都以 use 开始
#### 使用
(```)
    import React, { useState } from 'react';

    function Example() {
    // 声明一个叫 "count" 的 state 变量
      const [count, setCount] = useState(0);
(```)
> 1. 此处count,setCount，相当于class重的this.state.count和setState({count: 0}), usetState的入参代表count的初使值
> 2. 调用setCount更新count的值
> 3. React 会重新渲染组件，并把最新的count传给它。
count,setCount需要一起声明。

### Effect Hook
> useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API。
> 当你调用useEffect的时候，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数。
> 副作用函数还会返回一个函数来指定如何清除副作用。
#### 专注业务逻辑而不是生命周期
> 在使用class组件时, 我们经常会把几个相同的方法，写在不同的生命周期里，然而使用effect我们可以重新组织我们的代码，我们可以使用多个effect，每个effect里放一个业务逻辑方法，不需要关注组件render后都要走到哪些生命周期，因为每次render后都会调用effect。
#### React 何时清除 effect
> React 会在组件卸载的时候执行清除操作。正如之前学到的，effect 在每次渲染的时候都会执行。这就是为什么 React 会在执行当前 effect 之前对上一个 effect 进行清除。
#### 每次更新都会运行Effect
> 每次props改变，需要render时，都会清除上一个Effect，运行下一个Effect
#### 跳过Effect进行性能优化
> 某些情况下，在render后都执行effect会有性能的影响（如对dom的操作），在 class 组件中，我们可以通过在 componentDidUpdate 中添加对 prevProps 或 prevState 的比较。
> 这所以它被内置到了 useEffect 的 Hook API 中。如果某些特定值在两次重渲染之间没有发生变化，你可以通知 React 跳过对 effect 的调用，只要传递数组作为 useEffect 的第二个可选参数即可
> (```)
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // 仅在 count 更改时更新
(```)
### 自定义Hook
> 当我们想在两个函数之间共享逻辑时，我们会把它提取到第三个函数中。而组件和 Hook 都是函数，所以也同样适用这种方式。

> 自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook。

#### UseReducer的Hook
## 参考资料
> REACT-HOOK [REACT-HOOK官方文档](https://zh-hans.reactjs.org/docs/hooks-intro.html)

> [REACT-HOOK深入不浅出](https://zhuanlan.zhihu.com/p/50099963)

> [Egg + React + SSR同构开发](http://ykfe.net/guide/isomorphism.html)