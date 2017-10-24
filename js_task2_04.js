function check(arr) {
    var a = true;
    for (var i=0; i<arr.length; i++) {
        if (arr[0] !== arr[i]) {
            a = false;
        }    
        
    }
    return a;
}

var myArr1 = [6,6,6];
var myArr2 = [6,6,6,6,9];

console.log(check(myArr1));
console.log(check(myArr2));