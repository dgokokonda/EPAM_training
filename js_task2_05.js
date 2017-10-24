function maximum(arr) {
    var max = arr[0];
    for (var i=0; i<arr.length; i++) {       
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return "Максимальное число: " + max;   
}

var array1 = [2,7,14,3];
var array2 = [0.5, 0, -0.5, 4, -7];
console.log(maximum(array1));
console.log(maximum(array2));
