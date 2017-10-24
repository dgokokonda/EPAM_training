//Задача 1. Написать функцию, которая принимает имя свойства и объект и ищет данное свойство только в прототипе
//переданного объекта (объект создать заранее через Object.create())

function searchProp(object, prop) {
  var result = object.hasOwnProperty(prop);
  if (result === true) {
    return object[prop];
  } else {
    return 'Not Found';
  }
}

var obj = { a: 1 };
var obj1 = Object.create(obj);
obj1.b = 2;

console.log(searchProp(obj1, 'c')); // Not Found
console.log(searchProp(obj1, 'b')); // 2
console.log(searchProp(obj1, 'a')); // Not Found

//Задача 2. Написать функцию, которая создает пустой объект, но без прототипа
//создать пустой объект без прототипа можно так: var emptyObj = Object.create(null);

function createEmptyObj() {} // создана функция-конструктор
//A.prototype.x = 10; //если создать свойство в объекте prototype, оно будет передано по ссылке
//в пустой объект как свойство prototype.
var emptyObj = new createEmptyObj(); // функцией создан пустой объект,
//т.е свойство _proto_ пока не содержит переданных свойств и значений от объекта prototype.
console.log(emptyObj);
console.log(emptyObj.constructor.prototype); //объект prototype «пустой»
