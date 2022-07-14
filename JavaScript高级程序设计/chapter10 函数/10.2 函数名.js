function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(10, 10));
let anotherSum = sum;
console.log(anotherSum(10, 20));
sum = null;
console.log(anotherSum(10, 20));    //具有多个名称 互不影响
function foo() { }
console.log(foo.name);              //name属性 表示函数表示符
 
 
