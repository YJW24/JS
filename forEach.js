let func = function (obj) {
    console.log(obj + 2)
}

let eachFor = function (array, obj) {
    for (let i = 0; i < array.length; i++) {
        obj(array[i]);
    }
}

eachFor(["2", 2, 4], func);
