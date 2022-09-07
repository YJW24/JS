//基本语法
functions sayHi（name，massage）{
   console.log（"Hello"+name+","+message);
}
function  diff(num1,num2){       //多参数  ，号隔开
  if(num1<num2){
    return num2-num1;
  }else{
    return num1-num2;            //一个函数可以有多个return，立即停止执行并退出  不指定返回值 实际返回undefined
  }
}
//严格模式下限制  参数和函数名不能是eval或arguments
