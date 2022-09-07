let s1 = "some texr";
let s2 = s1.substring(2);    //该方法是取索引2到末尾
console.log(s2);

let LBJ = new Object("23");
console.log(LBJ instanceof String);   //object能根据传入原始值类型返还相应实例

let value = '25';
let number = Number(value);        //转型函数
console.log(typeof number);        //number
let obj = new Number(value);       //new构造函数
console.log(typeof obj);           // object

//Boolean  建议永远不要使用Boolean对象！！！
let falesObject = new Boolean(false);
let result = falesObject && true;
console.log(result);               //true所有对象在布尔表达式都会转化为true
console.log(typeof falesObject);   //object
console.log(falesObject instanceof Boolean);   //true 原始值会返回false


//Number
let num = 11;
console.log(num.toString());      //该方法接收一个表示基数的参数 并返回数值字符串 默认十进制
console.log(num.toString(2));
console.log(num.toString(10));
console.log(num.toString(16));
console.log(num.toFixed(2));     //返回包含指定小数点位数的数值字符串 会自动舍入
console.log(num.toExponential(1)); //科学计数法
let numberObject = new Number();
console.log(typeof numberObject);     //object      Number和Boolean一样
console.log(numberObject instanceof Number);    //true


//String
let stringObject = new String('Hello world')
console.log(stringObject.length)      //11
