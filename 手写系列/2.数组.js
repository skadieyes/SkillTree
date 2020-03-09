/**
 * 乱序
 * @param {*} arr 
 */
function mixArr(arr) {
    return arr.sort(() => {
        return Math.random() - 0.5;
    })
}
// 著名的Fisher–Yates shuffle 洗牌算法
function shuffle(arr) {
    let m = arr.length;
    while (m > 1) {
        let index = parseInt(Math.random() * m--);
        [arr[index], arr[m]] = [arr[m], arr[index]];
    }
    return arr;
}