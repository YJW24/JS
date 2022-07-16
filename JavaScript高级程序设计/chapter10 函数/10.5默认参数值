function makeKing(name = 'Henry', number = 'VIII') {
    return `King ${name} ${number}`;
}
console.log(makeKing());
console.log(makeKing('Louis'));
console.log(makeKing(undefined, 'VI'));                      //给参数传undefined相当于没有传值，但这样可以利用独立的默认值
//console.log(makeKing(arguments[0], arguments[1]));         //argunents不反映参数默认值
function makeKing1(name = 'kobe', numerals = makeKing()) {   //默认值也可以是调用函数返回值
    return `king${name} ${numerals}`;
}
console.log(makeKing1())
let makeKing2 = (name = 'henry') => `king ${name}`;                //箭头函数也可使用默认值 但必须带括号
console.log(makeKing2());
//默认参数作用域与暂时性死区
