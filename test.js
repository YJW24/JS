let eachFor = (array, fn) => {
    for (let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}
let func;
eachFor(["2", 2, 4], func = (item) => { console.log(item) });



let newArray = [];
let filter = (array, fn) => {
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            newArray.push(array[i]);
        }
    }
    console.log(newArray);
}
let func;
filter([1, 2, 4, 5, 7, 8], func = (item) => Boolean(item + 3 === 4));

filter(['cxk', 'yujingwang', 'kobe', 'lerbon', 'present', '123456'], func = (item) => Boolean(item.length >= 6));
