//窗口位置
window.moveBy(-50, 0);                //向左移动50
window.moveTo(100, 300);              //移动到坐标位置   两方法依照浏览器可能被禁用

//窗口大小
window.resizeTo(100, 50)               //缩放到100×50   缩放到
window.resizeBy(100, 100);             //缩放到200×150  缩放多少

//视口位置
window.scrollBy(0, 100);              //向下滚动100个像素
window.scrollTo(0, 0);                //滚动到左上角
window.scrollTo(100, 100);            //滚动到距离顶边和左边各100个像素位置

window.scrollTo({
    left: 100,
    top: 100,
    behavior: 'auto'                   //正常滚动  behavior属性
});
window.scrollTo({
    left: 100,
    top: 100,
    behavior: 'smooth'                 //平滑滚动
});

//导航与打开新窗口
let wroxWin = window.open("http://www.cbaleague.com",                          //URL
    "wroxWin",                                                //在对应窗口打开URL 若存在就在该窗口 若不就新建窗口
    "height=4000,width=400,top=100,left=100,resizable=yes");        //在第二个参数新建窗口基础上 来指定新窗口特性 若没穿第三参数就全部默认

wroxWin.resizeTo(500, 500);
wroxWin.moveTo(100, 100);
wroxWin.scrollTo({
    left: 1000,
    top: 100,
    behavior: 'smooth'                 //平滑滚动
});




//定时器
let timeoutID = setTimeout(() => alert("Hello World"), 1000);               //要执行代码字符串或者函数  第二个参数等待时间毫秒  并返回超时排期的id 唯一标识符
clearTimeout(timeoutID);                                                    //利用cleartimeout（）方法取消超时任务  必须在任务未被执行前调用
setInterval(() => alert("登峰造极"), 10000)                                 //每隔一段时间执行代码   第二个参数是时间间隔   最好不要使用有时间差
clearInterval();     //同理  利用clearInterval()方法来取消任务 

let num = 0, intervlid = null;
let max = 10;
let incrementNumber = function () {
    num++;
    //如果未达到最大值则取消所有未执行任务
    if (num == max) {
        clearInterval(intervlid);
    } else {
        alert("Done");
    }
}
setTimeout(incrementNumber, 500);           //设置循环任务推荐做法

//系统对话框  三种 外观由浏览器决定
alert("welcome China");                     //警告对话框

confirm("Are you sure?");                   //确认对话框  点击ok返回true 点击cancel返回false

if (confirm("Are you sure?")) {
    alert("I'm so glad you're sure!");
} else {
    alert("I'm sorry to hear you're not sure.");
}

prompt("What's your name", "");        //提示对话框 两个参数  文本框输入内容可以默认为空字符串
