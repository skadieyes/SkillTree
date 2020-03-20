/**
 * 手写一个call
 */
// 谁调用了函数，函数的this就是谁
Function.prototype.call2 = function (content = window) {
    content.fn = this;
    let args = [...arguments].slice(1);
    let result = content.fn(...args);
    delete content.fn;
    return result;
}
let foo = {
    value: 1
}
function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}
bar.call2(foo, 'black', '18') // black 18 1

/**
 * apply
 */
Function.prototype.apply2 = function (context = window) {
    context.fn = this
    let result;
    // 判断是否有第二个参数
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}

/**
 * bind
 */
Function.prototype.bind2 = function (content) {
    if (typeof this != "function") {
        throw Error("not a function")
    }
    // 若没问参数类型则从这开始写
    let fn = this;
    let args = [...arguments].slice(1);

    let resFn = function () {
        return fn.apply(this instanceof resFn ? this : content, args.concat(...arguments))
    }
    function tmp() { }
    tmp.prototype = this.prototype;
    resFn.prototype = new tmp();

    return resFn;
}
