// 回调函数
// 参考 https://www.w3cplus.com/javascript/Sexy-Javascript-understand-the-callback-function-with-the-use-of-Javascript-in.html

/**
 * 把一个函数作为变量传递给函数
 * 1. 传递参数给回调函数
 * 2. 在执行之前确保回调函数是一个函数
 * 3. 使用Call和Apply函数来保证this指向正确
 */

//全局变量 
var allUserData = [];
//普通的logStuff函数，将内容打印到控制台 
function logStuff (userData) {
  if (typeof userData === "string") {
    console.log(userData);
  } else if (typeof userData === "object") {
    for (var item in userData) {
      console.log(item + ": " + userData[item]);
    }
  }
} 

//一个接收两个参数的函数，后面一个是回调函数 
function getInput (options, callback) {
  allUserData.push(options); callback(options);
}
//当我们调用getInput函数时，我们将logStuff作为一个参数传递给它 
//因此logStuff将会在getInput函数内被回调（或者执行）
getInput({ name: "Rich", speciality: "Javascript" }, logStuff); 


/**
 * 回调有很多的应用场景
 * 1. 异步调用 （例如读取文件，HTTP请求，等等）
 * 2. 时间监听器/处理器
 * 3. setTimeout 和 setInterval
 * 4. 精简代码
 */

 /**
  * 第二种办法
  * 1. 定义导出
  * 2. 返回导出的方法/定义导出方法，把callback函数push到callbacks下对应的method对象中
  * 3. 定义调用回调的函数exec，调用对应的出入的method
  */
function callBackExample () {
    const callbackMethods = ['done', 'catch'];
    const callbacks = {};
    const exportMethods = callbackMethods.reduce((pre, method) => {
        callbacks[method] = [];
        pre[method] = function (callback) {
            callbacks[method].push(callback);
            return exportMethods;
        };
        return pre;
    }, {});
    function exec (methodName) {
        if (!callbacks[methodName]) return;
        let args = [...arguments];
        callbacks[methodName].forEach(callback => {
            callback.apply(null, args.slice(1));
        });
    }
  setTimeout(() => {
      exec('done', 'done');
  }, 2000)
    setTimeout(() => {
      exec('catch', 'catch');
  }, 1000)
    return exportMethods;
}

callBackExample().catch((res)=> console.log(res)).done((res)=>console.log(res))
