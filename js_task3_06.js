function deepClone(obj) {
  var clone = {};
  for (var prop in obj) {
    if (typeof obj[prop] !== 'object') {
      clone[prop] = obj[prop];
    } else {
      clone[prop] = deepClone(obj[prop]);
    }
  }
  return clone;
}

var obj1 = { a: 10, o2: { b: 1, o3: { c: 3 }, d: 2 } };
var copyObj1 = deepClone(obj1);

console.log(deepClone(obj1));
console.log(obj1.o2.o3 === copyObj1.o2.o3);
console.log(obj1.o2.o3 === undefined);
