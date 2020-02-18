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

## setState调用
> setState时，若isBatchingUpdates为false，所有队列中更新执行batchUpdate,否则, 把当前组件放入dirtyComponents数组中。

## 事务
> 一个所谓的 Transaction 就是将需要执行的 method 使用 wrapper 封装起来，再通过Transaction 提供的 perform 方法执行。而在perform之前，先执行所有wrapper中的initialize方法；perform 完成之后（即 method 执行后）再执行所有的 close 方法。一组 initialize 及 close 方法称为一个 wrapper 。

## 总结
> 在React中，如果是由React引发的事件处理，调用setState不会同步更新this.sate，除此之外setState调用会同步执行this.state。所谓“除此之外”，指的是绕过React通过addEventListener直接添加的事件处理函数，还有通过setTimeout/setInterval产生的异步调用。

> 在React的setState函数实现中，会根据一个变量isBatchingUpdates判断是直接更新this.state还是放到队列中回头再说。

> isBatchingUpdates默认是false，也就表示setState会同步更新this.state，但是，有一个函数batchedUpdates，这个函数会把isBatchingUpdates修改为true，而当React在调用事件处理函数之前就会调用这个batchedUpdates，造成的后果，就是由React控制的事件处理过程setState不会同步更新this.state。
## 参考资料
> [深入setState机制](https://github.com/sisterAn/blog/issues/26)
> [React 中 setState 什么时候是同步的，什么时候是异步的？](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/17)