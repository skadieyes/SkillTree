# 10.js运行机制
> [setTimeout,promise,async await的区别](https://gongchenghuigch.github.io/2019/09/14/awat/#toc-heading-2)
> [JS的运行机制（浏览器和node）](https://www.jianshu.com/p/5351ee68dc75)
> [不要混淆nodejs和浏览器中的event loop）](https://cnodejs.org/topic/5a9108d78d6e16e56bb80882)
## js运行机制
1. 所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）
2. 主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
3. 一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
4. 主线程不断重复上面的第三步。

> 只要主线程空了，就会去读取"任务队列"，这就是JavaScript的运行机制。这个过程会不断重复

## 任务队列
> 同步任务是指，在主线程上的任务，只有前一个任务执行完毕，才能执行后一个任务；异步任务是指，不进入主线程，而是在任务队列中的任务，当异步任务有了结果，就会在队列中添加一个事件。当主线程的同步任务都执行完成后，再去异步的任务队列中按照从前往后的顺序，执行异步任务添加的事件，也就是执行回调函数。如此反复，便形成一个事件循环。

### 微任务和任务之间的区别
> microtasks: process.nextTick, promise, Object.observe (废弃) ,MutationObserver
> macrotasks: setTimeout, setImmediate, setInterval, I/O, UI 渲染

> 主线程运行的时候，产生堆和栈，栈中的代码调用各种外部API，它们在任务队列中加入各种事件（click，load，done）。只要栈中的代码执行完毕，主线程就会去读取"任务队列"，依次执行那些事件所对应的回调函数。
执行栈中的代码（同步任务），总是在读取"任务队列"（异步任务）之前执行。

## 定时器-setTimeout
> "任务队列"还可以放置定时事件，即指定某些代码在多少时间之后执行。这叫做"定时器"（timer）功能，也就是定时执行的代码。

> setTimeout(fn,0)的含义是，指定某个任务在主线程最早可得的空闲时间执行，也就是说，尽可能早得执行。它在"任务队列"的尾部添加一个事件，因此要等到同步任务和"任务队列"现有的事件都处理完，才会得到执行。

> HTML5标准规定了setTimeout()的第二个参数的最小值（最短间隔），不得低于4毫秒，如果低于这个值，就会自动增加。在此之前，老版本的浏览器都将最短间隔设为10毫秒。另外，对于那些DOM的变动（尤其是涉及页面重新渲染的部分），通常不会立即执行，而是每16毫秒执行一次。

## Promise
> promise本身是同步的立即执行函数，当在 executor 中执行 resolve 或者 reject 的时候, 此时是异步操作。

> promise是resolved或rejected，这个task就会放入当前循环会和的microtast queue. promise是pending，这个task就会放入时间循环的未来某个回合的microtast queue中.

## async await 
> async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体。
> await 的含义为等待，也就是 async 函数需要等待 await 后的函数执行完成并且有了返回结果（ Promise 对象）之后，才能继续执行下面的代码。await通过返回一个Promise对象来实现同步的效果。

## 浏览器和Node中的运行机制
> nodejs的event是基于libuv，而浏览器的event loop则在html5的规范中明确定义。
> libuv已经对event loop作出了实现，而html5规范中只是定义了浏览器中event loop的模型，具体实现留给了浏览器厂商。
> node.js中的事件完成后，通知js主线程调用回调函数，等到js主线程空闲（主线程的代码执行完）时才去调用回调函数。