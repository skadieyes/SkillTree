/**
 * String API
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 */

 // slice
 // 提取字符串的一部分
 // 语法 str.slice(beginIndex[, endIndex])
 const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(4, 19));
// expected output: "quick brown fox"

// split
// split() 方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。 
// str.split([separator[, limit]])
var myString = "Hello World. How are you doing?";
var splits = myString.split(" ", 3);

console.log(splits); // ["Hello", "World.", "How"]

// substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。
// 提取字符串的一部分
// str.substring(indexStart[, indexEnd])
// 如果省略indexEnd，则一直提取字符串至末尾
var anyString = "Mozilla";
// 输出 "Moz"
console.log(anyString.substring(0, 3));


// toLocaleLowerCase()
// 根据任何指定区域语言环境设置的大小写映射，返回调用字符串被转换为小写的格式。
// str.toLocaleLowerCase(locale) 
'ALPHABET'.toLocaleLowerCase()

// toLowerCase()
// str.toLowerCase()
// 转换为小写
console.log("ALPHABET".toLowerCase());
// "alphabet"

// 大写也一样
// str.toLocaleUpperCase(locale) 
// toUpperCase()

// trim() 方法会从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";

// 

// replace
 // 字符串替换
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
const regex = /dog/gi;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
console.log(p.replace('dog', 'monkey'));

// split
// 使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。 
// concat
// 字符串拼接合并
var hello = "Hello, ";
console.log(hello.concat("Kevin", " have a nice day."));

// includes
// 一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false
'Blue Whale'.includes('blue'); // returns false

// indexOf
//str.indexOf(searchValue)
// str.indexOf(searchValue, fromIndex)
// indexOf() 方法返回调用它的 String 对象中第一次出现的指定值的索引，从 fromIndex 处进行搜索。如果未找到该值，则返回 -1。
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log('The index of the first "' + searchTerm + '" from the beginning is ' + indexOfFirst);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log('The index of the 2nd "' + searchTerm + '" is ' + paragraph.indexOf(searchTerm, (indexOfFirst + 1)));
// expected output: "The index of the 2nd "dog" is 52"

//lastIndexOf() 方法返回调用String 对象的指定值最后一次出现的索引，在一个字符串中的指定位置 fromIndex处从后向前搜索。如果没找到这个特定值则返回-1 。
'canal'.lastIndexOf('a');     // returns 3 

// match
// match方法检索返回一个字符串匹配正则表达式的的结果，会返回一个数组
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

// replace 
// str.replace(regexp|substr, newSubStr|function)
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...

// search
// 当你想要知道字符串中是否存在某个模式（pattern）时可使用 search()，类似于正则表达式的 test() 方法。当要了解更多匹配信息时，可使用 match()（但会更慢一些），该方法类似于正则表达式的 exec() 方法。
var str = "hey JudE";
var re = /[A-Z]/g;
var re2 = /[.]/g;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(re2)); // returns -1 cannot find '.' dot punctuation

// 
