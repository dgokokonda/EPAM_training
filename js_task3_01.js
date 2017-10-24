var myObj = {};
myObj.number = 10;
myObj.str = "for example";
myObj.func = function (a,b) {
return a - b;
};
myObj.bool = true;

delete myObj.str;

console.log(myObj.str);
