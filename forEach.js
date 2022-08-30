let eachFor = (array, fn) => {
    for (let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}
let func;
eachFor(["2", 2, 4], func = (item) => { console.log(item) });
