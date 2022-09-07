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
const years = [1991, 2000, 2001, 2010, 2022];    //数组与循环
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i])
};
console.log(ages);
console.log(ages);
const jonas = ['lala', 'player', 22, 'CHN', true, 'DJTU', 185];
console.log(`-----only string-----`);
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;   //退出当前循环停止 
    console.log(jonas[i], typeof jonas[i]);
}
console.log(`-----break number-----`);
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;     //立即终止
    console.log(jonas[i], typeof jonas[i]);
}

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----- Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {                  //内循环
        console.log(`Exerice ${exercise}:Lifting weight reptition ${rep}`);
    }
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];     //应用
const tips = [];
const totals = [];
for (let I = 0; I <= bills.length - 1; I++) {
    let tips1 = (50 <= bills[I] && bills[I] <= 300) ? bills[I] * 0.15 : bills[I] * 0.2;
    tips.push(tips1);
    let totals1 = tips[I] + bills[I];
    totals.push(totals1);
    console.log(tips, totals);
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
