function copyObj (obj) {
    var clone = {};
    for (var key in obj) {
        clone[key] = obj[key];
    }
    return clone;
}

var myObj = {
    name: "Ivan",
    surname: "Petrov",
    age: 28
};

console.log(copyObj(myObj));