const friends = ['lerbon', 'kobe', 'nash', 'hardon', 'kyrie'];   //数组字面量表示法
const values1 = [];         //空数组
const values2 = [1, 2,];
console.log(friends);
const years = new Array(1991, 1992, 1989, 2001,);
const colors = Array(3);                    //可省new 数字就是创建一个包含几个元素的数组
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[1] = 'DAHU';   //修改
const playerAge = 2022 - 2001;
const students = ['yjw', playerAge, 'PG', 24];
console.log(students);                //不同种类



//栈方法和队列方法
const newLength = friends.push('jay');   //添加元素到数组末尾并返还新数组长度
console.log(friends);
console.log(newLength);
friends.unshift('John');                 //与push相反  在队首添加元素
console.log(friends);
friends.pop();                           //删除最后一个元素
const kyrie = friends.pop();             //继续删最后一个并返回被删元素
console.log(kyrie);
console.log(friends);
friends.shift();                         //删除队首元素并返回该值
console.log(friends);



//排序方法
let values=[1,2,3,4,5];
values.reverse();                         //reverse()将数组元素反向排列
alert(values);                            //5，4，3，2，1
let values3=[0,1,5,10,15];
values.sort();                            //默认按照升序排列元素 比较字符串大小  
alert(values2);                           //0，1，10，15，5  因为5>1所以5>15即一位一位比较
//sort方法可以接受比较函数
function compare(values1, values2) {
    if (values1 > values2) {
        return -1;
    } else if (values1 < values2) {
        return 1
    } else {
        return 0;
    }
}
values.sort(compare);
alert(values3);                            //0，1，5，10，15      返还值交换一下可产生降序效果
function compare(values1, values2) {       //元素都是数值可用减法更简单
    return value2-value；
}                                         


console.log(friends.indexOf('DAHU'));    //知道具体元素位置
console.log(friends.indexOf('jordan'));
friends.push(23)
console.log(friends.includes('DAHU'));   //真假（===全等）
console.log(friends.includes('23'));
console.log(friends.includes('jordan'));
if (friends.includes('DAHU')) {
    console.log('You have a friend called DAHU');
}                                       //includes用做条件

