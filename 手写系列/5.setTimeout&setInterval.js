// 用setTimeout实现setInterval
function mySetInterval() {
    mySetInterval.timer = setTimeout(() => {
        arguments[0]()
        mySetInterval(...arguments)
    }, arguments[1])
}

mySetInterval.clear = function () {
    clearTimeout(mySetInterval.timer)
}

mySetInterval(() => {
    console.log(11111)
}, 1000)

setTimeout(() => {
    // 5s 后清理
    mySetInterval.clear()
}, 5000)

// setInterval
function foo() {
    console.log("执行foo");
    setTimeout(foo, 1000)
}
foo();
function goo() {
    console.log("执行goo");
}
setInterval(goo, 1000);