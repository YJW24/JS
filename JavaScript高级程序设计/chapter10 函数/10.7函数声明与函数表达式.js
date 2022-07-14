//声明函数
const age1 = calcAge1(2001);   //可以先用 在未被定义前（函数声明提升）
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
console.log(age1);
//函数表达式
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(2001)
console.log(age2);
