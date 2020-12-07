// 创建一个空数组
const arr = Array.apply(null, new Array(4));
arr.map((elem, index) => index);

// 相等比较
Object.is(0 , ' '); //false
Object.is(null, undefined); //false
Object.is([1], true); //false
Object.is(NaN, NaN); //true

// 获取文件后缀名
function getFileExtension1(filename) {
  return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;
}

function getFileExtension3(filename) {
  return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
}
// 使用tap来调试

function tap(x) {
    console.log(x);
    return x;
}

arr.filter(c=> tap(c>6))

// 反转字符串

const reverseString = string => [...string].reverse().join('')
reverseString('Hello Word!') // "!dlroW olleH"


