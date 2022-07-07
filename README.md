# hoop
let yjw = 'yujingwang';
console.log(yjw);
let yjwYear = 22;
let days = 2022 - yjwYear;
console.log(days);
let firstName = 'yu';
let lastName = 'jingwang';
let quanming = firstName + ' ' + lastName;
console.log(quanming);
console.log(2 ** 3 ** 2 + 1);
let markBMI, johnBMI;
let markmass = 78;
let johnmass = 92;
let markheight = 1.69;
let johnheight = 1.95;
markBMI = markmass / markheight ** 2;
johnBMI = johnmass / johnheight ** 2;
const markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
    console.log('mark的BMI比john高');
} else {
    console.log('john的BMI比mark高');
}
console.log(`mark的BMI为${markBMI}, john的BMI为${johnBMI}, ${markHigherBMI}`);

const firstname = 'jonas';
const job = 'player';
const birthYear = 2001;
const year = 2022;
const jonas = "I'm " + firstname + ',a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);
const jonasNew = `I'm ${firstname},a ${(year - birthYear)} years old ${job}!`;
console.log(jonasNew);
console.log(`This is why we play!`);
console.log('This \n\
is why we \n\
play!');//单引号换行
console.log(`This
is why we 
play!`);//反引号回车换行
const age = 19;
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log('yjw can start driving license🚘');
}
const yjwAge = 15;
if (yjwAge >= 18) {
    console.log('yjw can drive car');
} else {
    const yearLeft = 18 - yjwAge;
    console.log(`yjw is too young.Wait another ${yearLeft} years:`);
}
