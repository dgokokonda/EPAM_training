
function checkStr (obj, prop) {
    
       
        if (prop in obj) {                  
            return true;
        }        
        return false;
    }


var myObj = {};
myObj.number = 10;
myObj.str = "for example";
myObj.bool = true;

console.log(checkStr(myObj, "fff"));

