let func = function (item) {
    console.log(item + 2)
}

let eachFor = function (array, func) {
    for (let i = 0; i < array.length; i++) {
        func(array[i]);
    }
}

eachFor(["2", 2, 4], func);
