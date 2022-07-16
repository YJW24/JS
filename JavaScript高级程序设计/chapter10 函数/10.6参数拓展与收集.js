let values = [1, 2, 3, 4];
function getSum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; ++i) {
        sum += arguments[i];
    }
    return sum;
}
console.log(getSum(...values));
console.log(getSum(...values, 5));
console.log(getSum(1, ...values, 4));
console.log(getSum(...values, ...[5, 6, 7]));
console.log(getSum(...values, ...[5, 6, 7, 8,]));
function getProduct(a, b, c, d = 1) {
    return a * b * c;
}
let getSum1 = (a, b, c = 0) => {
    return a + b + c;
}
console.log(getSum1(...[5]));
console.log(getSum1(...[5, 6]));
console.log(getSum1(...[5, 6, 7]));
console.log(getProduct(...[5, 1, 1, 2]));      //
console.log(getProduct(...[5, 6]));
console.log(getProduct(...[5, 6, 7,]));
//收集参数
