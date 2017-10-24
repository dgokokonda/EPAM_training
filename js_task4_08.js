//Написать функцию, которая принимает строку и возвращает перевернутую строку
//f(‘abc’) -> ‘cba’

function reverseStr(str) {
  var revStr = '';
  for (var n = str.length - 1; n >= 0; n--) {
    revStr += str.charAt(n);
  }

  return revStr;
}

var example = 'abcdef';
console.log(reverseStr(example));
