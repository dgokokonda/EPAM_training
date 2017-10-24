function editObject (obj, prop) {    
    
        if (!(prop in obj)) {
            obj[prop] = "new";            
        }    
        return obj;
    }

var myObj = {};
myObj.number = 10;
myObj.str = "for example";
myObj.bool = true;

console.log(editObject(myObj, "ddd"));
console.log(editObject(myObj, "a"));
