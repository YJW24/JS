let person = new Object();
person.name = 'Nicholas';
person.age = 22;
let person1 = {};                  //和上一个等效
person.name = 'Nicholas'
person.age = 22;
const jonas = {                //对象字面量表示法 属性名可以是字符串或者数值
    firsrName: '于',
    lastName: '景旺',
    age: 2022 - 2001,
    caleage: function (birthYear) {
        return 2022 - birthYear;
    },                            //函数是一个特殊的值 也可用于属性值里
    'job': 'student',
    friends: ['01', '02', '03'],
    5: true
};
console.log(jonas);
console.log(jonas.caleage(1991));            //点表式法
console.log(jonas['caleage'](1991));         //括号表式法 方括号里可以添加任何表达式
const interestedIn = prompt('firstName,lastName,age,job,friends');
console.log(jonas[interestedIn]);        //括号的意义

jonas.location = 'CHN';                  //添加属性
jonas['height'] = 175;
console.log(jonas);
