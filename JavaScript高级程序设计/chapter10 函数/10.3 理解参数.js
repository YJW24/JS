function sayHi() {
    console.log("Hello " + arguments[0] + "," + arguments[1]);  //非箭头函数可以用argument 数组从0开始
}
sayHi("yjw", "NB");
function doAdd() {
    if (arguments.length === 1) {
        console.log(arguments[0] + 10);
    } else if (arguments.length === 2) {
        console.log(arguments[0] + arguments[1]);               //length属性检车传入参数个数 arguments和命名参数可以共用 值保持同步
    }                                                           //但不用arguments加参数    严格模式下也不能赋值必须是命名参数传入
}
doAdd(10);
doAdd(30, 20)
doAdd("yjw", 10)
 
