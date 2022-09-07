//date
let now = new Date();                                //返回当前日期时间
console.log(now);
let oneDay = new Date(Date.parse("9/14/2001"));      //参数是日期字符串Date会调用parse方法 所以等价可简写
let towDay = new Date("jun 21,2001");                //月份可以缩写 最好大写  都是以月日年为基础其他不必需
let threeDay = new Date("sun may 1 2022 4:00:00")    //周几会自动纠正    浏览器也会影响结果
console.log(oneDay, towDay, threeDay);

let fourDay = new Date(Date.UTC(2022, 0));           //UTC方法 年月是必需的 月是已0为起始 不提供日默认为1时间默认为0
let fiveDay = new Date(2022, 4, 5, 17, 55, 54);      //有疑问  也可以隐式调用（本地时区日期）
console.log(fourDay, fiveDay);

//日期方法
let now1 = new Date();
let dayss = now1.toLocaleDateString();
console.log(dayss);
