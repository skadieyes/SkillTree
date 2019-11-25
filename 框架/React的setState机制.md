# React的setState机制
## 含义
> React 是通过管理状态来实现对组件的管理，即使用 this.state 获取 state，通过 this.setState() 来更新 state，当使用 this.setState() 时，React 会调用 render 方法来重新渲染 UI。

## setState 异步更新
> setState通过一个队列机制来实现state更新，当执行setState时，会将需要更新的state浅合并后放入状态队列，而不会立即更新state，队列机制可以
高效批量更新state。

> React通过状态队列机制实现了setState的异步更新，避免重复的更新state。

> setState的官方文档中这样说: 将 nextState 浅合并到当前 state。这是在事件处理函数和服务器请求回调函数中触发 UI 更新的主要方法。不保证 setState 调用会同步执行，考虑到性能问题，可能会对多次调用作批处理。

## setState循环调用风险
> 当调用setState时，如果在 shouldComponentUpdate 或 componentWillUpdate 方法里调用 this.setState 方法，就会造成崩溃。
> 这是因为在shouldComponentUpdate 或 componentWillUpdate 中setState, 会调用updateComponent进行组建更新，而updateComponent 方法又会调用 shouldComponentUpdate和componentWillUpdate 方法，因此造成循环调用，使得浏览器内存占满后崩溃。

## 


## 参考资料
> [深入setState机制](https://github.com/sisterAn/blog/issues/26)
> [React 中 setState 什么时候是同步的，什么时候是异步的？](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/17)