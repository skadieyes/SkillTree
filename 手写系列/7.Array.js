/**
 * Array API
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 */

/**
* Array.from
*/
// Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
// Array.from(arrayLike[, mapFn[, thisArg]])
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

/**
 * Array.isArray
 */
// Array.isArray()
// Array.isArray() 用于确定传递的值是否是一个 Array。
Array.isArray([1, 2, 3]);
// true
Array.isArray({ foo: 123 });
// false

/**
 * concat
 */
//  concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

/**
 * entries
 */
// entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]

/**
 * every
 */
// every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

/**
 * some
 */
// some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
const array = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// expected output: true

/**
 * splice
 */
// splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

/**
 * toLocaleString
 */
// toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。
const array1 = [1, 'a', 'adfsdfsdfsdfsdfsf'];
const localeString = array1.toLocaleString();
console.log(localeString);
// expected output: "1,a,adfsdfsdfsdfsdfsf",

/**
 * toString
 */
// Array对象覆盖了Object的 toString 方法。对于数组对象，toString 方法连接数组并返回一个字符串，其中包含用逗号分隔的每个数组元素。
/**
 * filter
 */
// filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

/**
 * find
 */
//  find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

/**
 * findIndex
 */
// findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

/**
 * flat
 */
// 按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
// var newArray = arr.flat([depth])
var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

/**
 * forEach
 */
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"

/**
 * includes
 */
// arr.includes(valueToFind[, fromIndex])
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
// expected output: true

/**
 * indexOf
 */
// 方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
// expected output: 1

/**
 * join()
 */
// arr.join([separator])
// join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"
console.log(elements.join(''));
// expected output: "FireAirWater"
console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

/**
 * keys()
 */
//  keys() 方法返回一个包含数组中每个索引键的Array Iterator对象。
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();
for (const key of iterator) {
    console.log(key);
}
// expected output: 0
// expected output: 1
// expected output: 2

/**
 * values()
 */
// values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值
const array1 = ['a', 'b', 'c'];
const iterator = array1.values();
// const iterator = arr[Symbol.iterator]();
// 也是一样的
for (const value of iterator) {
    console.log(value);
}
// expected output: "a"
// expected output: "b"
// expected output: "c"
/**
 * pop
 */
// pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
// expected output: "tomato"
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

/**
 * shift
 */
// shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1);
// expected output: Array [2, 3]
console.log(firstElement);
// expected output: 1

/**
 * unshift
 */
// unshift()方法把一个或多个元素添加到数组的开头, 并返回该数组的新长度(该方法修改原有数组)。
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
// expected output: 5
console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

/**
 * slice
 */
// arr.slice([begin[, end]])
// slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]
/**
 * push
 */
// push方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

/**
 * reduce
 */
// arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// Accumulator (acc) (累计器) Current Value(cur)(当前值) Current Index(idx)(当前索引) Source Array(src)(源数组)
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

/**
 * reverse
 */
// reverse() 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]
const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]
// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]

/**
 * fill
 */
// fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
const array1 = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]
// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]
console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

// Array[@@species] 访问器属性返回 Array 的构造函数。