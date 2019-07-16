# EGG+REACT+SSR服务端渲染
## 构建配置
### 基础配置
> 对less/sass， jsx/ts的编译，处理图片和字体
### client配置
> 打包entry, 打包output，optimization，plugins
### server配置
> base部分同client的

> 在output中配置target, 告诉webpack当前环境是Node环境，可以使用Node.js require加载chunk

> 使用webpack-node-externals将依赖外置, 代码中引入依赖, 打包的时候不会把依赖和代码打包在一起， 保留require之类的
语句在代码中。在传统的CSR项目中, 也可以开启这个选项让React/Vue/Jquery这些基本上永远不会更新的库以script标签的形式从外部引入作为全局变量，而不是打包到业务代码中，让浏览器缓存的功能发挥出来。 

> 这里使用nodeExternals将所有的node_module模块都不打包，这样构建出来的bundle更小, 服务端执行速度更快。我们的node运行环境中本来就存在node_modules文件夹，不需要在打包在bundle中，在页面请求来的时候, 从node_modules加载对应模块即可。
> whitelist白名单选项的作用是，在白名单的文件仍需要webpack去处理它
> libraryTarget指定导出模块的类型为commonjs2, 因为运行环境是Node.js而不是浏览器端，所以需要遵循Node.js的模块格式

### 服务端数据预取
#### 服务端渲染获取数据的操作，由原来的客户端发起的ajax请求数据的形式改为服务端获取，也可以部分数据由服务端获取部分由客户端获取。

#### 这里把服务端的逻辑封装到一个叫severRender的方法中进行，这个方法中我们做的任务是获取到需要渲染的组件和数据，将他们在Node侧编译成html返回给客户端。

#### serverRender
> 1.首先根据当前请求的Path,来决定要渲染哪个组件

> 2.检测组件上有没有getInitialProps, 如果有调用这个方法并且把参数传到组件里

> 3.获取组件的layout

> 4.将数据挂载到ctx对象上，数据会通过window注入，作为客户端的初始化数据

> 5.将数据作为组件的props传入， 使得组件可以通过props.xxx的方式读取服务端的数据

> 6.返回一个React Element，将会作为ReactDOMServer.renderToStream()这个方法的参数传入。这也是我们服务端的打包入口文件，因为其中包含了大量的es6以及JSX语法，所以我们必须得经过webpack + babel处理后，才能在Node侧调用该方法

#### 客户端DOM激活
> 1.判断是使用ssr还是csr的渲染模式, 使用window.__USESSR__属性来判断，使用了SSR的应用会在服务端吐出来的html中注入这个属性. ssr会使用ReactDOM.hydrate的方法进行渲染, csr会使用ReactDOM.render

> 2.使用BrowserRouter包裹组件，是为了使用路由能够在前端进行跳转

> 3.获取组件的layout, 没有就是用默认的layout

> 4.使用react-router渲染我们的组件

> 5.使用高阶组件getWrappedComponent把组件包装一下（为了保证SSR／CSR应用每次进行前端路由切换时都会调用getInitialProps方法，并将获取的数据作为props注入到要渲染的组件。）

#### hydrate API
> dom检测: hydrate API是React16的新API, hydrate会在客户端生成一遍vdom, 并比较服务端生成的vdom和客户端生成的vdom是否一致, 如果不一致会显示error.