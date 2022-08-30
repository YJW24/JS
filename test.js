let eachFor = (array, fn) => {
    for (let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}
let func;
eachFor(["2", 2, 4], func = (item) => { console.log(item) });



let filter = (array, fn) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            newArray.push(array[i]);
        }
    }
    console.log(newArray)
    return newArray;

}

filter([1, 2, 4, 5, 7, 8], (item) => Boolean(item + 3 === 4));

filter(['cxk', 'yujingwang', 'kobe', 'lerbon', 'present', '123456'], (item) => Boolean(item.length >= 6));
