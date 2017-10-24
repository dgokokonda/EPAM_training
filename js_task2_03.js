
function count(arr) {
    var even = 0;
    var odd = 0;
    var zero = 0;
   
    for (var i=0; i<arr.length; i++) {
	    if ((arr[i] % 2 === 0) && (arr[i] !== 0)) {
      	    even++;
        }
        
        else if ((arr[i] % 2 !== 0) && (arr[i] !== 0)) {
            odd++;
        }
        else {
            zero++;
        }
    
    }  
    return "четных чисел: " + even + ", " + "нечетных чисел: " + odd + ", " + "нулей: " + zero; 
   
}

var array1 = [1,3,7,2,5,55,6,0,8,10,0];

console.log(count(array1));
