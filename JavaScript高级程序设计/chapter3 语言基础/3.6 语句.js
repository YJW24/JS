//if语句
if (i > 25)
    console.log("Greater than 25.")
else {
    console.log("less than or equal to 25.");   //一个语句块 可以是多行
}

if (i > 25)
    console.log("Greater than 25.")
else if (i < 0) {
    console.log("Less than 0.");
} else {
    console.log("Between 0 than 25,inclusive.");
}



//do-while语句  至少执行一次(后测试循环)
let i = 0;
do {
    i = +2;
} while (i < 10);



//while语句   可能不执行（先测试循环）
let i = 0;
while (i < 10) {
    i += 2;
}



//for语句
for (let rep = 1; rep <= 10; rep++) {  //使用let声明迭代器变量
    console.log(`This is Why WE play ${rep}`);
}
for (; ;) {                            //无穷循环
doSomething();
}



//switch语句
const day = 'tuseday';
switch (day) {
    case 'monday':
        console.log('今天要好好学习');
        break;
    case 'tuseday':
        console.log('周二要好好学习');
    case 'wednesday':
        console.log('周三劳逸结合');
    case 'thurday':
    case 'friday':
        console.log('摆烂');
        break;
    default:
        console.log('不想活了');
}
