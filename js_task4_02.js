//Написать функцию, которая принимает строку и возвращает эту же строку, на с заглавным первым символом
//f(‘abc’) -> ‘Abc’

function editStr(str) {
  return str[0].toUpperCase() + str.slice(1);
}
var example = 'how are you?';
console.log(editStr(example));
