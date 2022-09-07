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
//类型转换
const inputYear = '2001';
console.log(Number(inputYear) + 18);
console.log(Number('jonas'));
console.log(String(2019), 2019);
console.log(String(2019) + '18');
//强制转换
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * 2);
console.log('24' / 2);
console.log('4' ** 2);*/

//== ===  if else
const favourite = Number(prompt("What's your favourite player's Number"));
console.log(favourite);
console.log(typeof favourite);
if (favourite === 11) {
    console.log('Cool! 11 is an amazing number!');
} else {
    if (favourite === 7) {
        console.log('7 is also amazing number!');
    } else {
        console.log('why is not 11 or 7 ?');
    }
}
const hasDriversLicense = true;//A
const hasGoodVision = false;//B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);   

const dolphinsFirstscore = 97;
const dolphinssecondscore = 112;
const dolphinsthirdscore = 101;
const koalasFirstscore = 109;
const koalassecordscore = 95;
const koalasthirdscore = 106;
const averagedolphins = (dolphinsFirstscore + dolphinssecondscore + dolphinsthirdscore) / 3;
const averagekoalas = (koalasFirstscore + koalassecordscore + koalasthirdscore) / 3;
console.log(averagedolphins, averagekoalas);
if (averagedolphins > averagekoalas && averagedolphins >= 100) {
    console.log('Dolphinf win the competition!' + averagedolphins);
} else if (averagedolphins < averagekoalas && averagekoalas >= 100) {
    console.log('Koalas win the competition!' + averagekoalas);
} else if ((averagedolphins === averagekoalas) && averagedolphins >= 100) {
    console.log('Dolphinf and Koalas both win competition');
} else {
    console.log('No one win the competition!');
}
//switch
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
 
