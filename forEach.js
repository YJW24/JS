let hanShu = function (Object) {
    console.log(Object + 2)
}

let eachFor = function (Array, Object) {
    for (let i = 0; i < Array.length; i++) {
        Object(Array[i]);
    }
}

eachFor(["2", 2, 4], hanShu);
