function output (obj) {
    
    for (var key in obj) {
        console.log( key + ' ' + obj[key]);
    }
}

var myObj = {};
myObj.number = 10;
myObj.str = "for example";
myObj.bool = true;

output(myObj);