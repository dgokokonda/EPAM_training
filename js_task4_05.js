//Написать функцию, которая принимает два аргумента, строку и число.
//Если длина строки больше, чем переданное число, то строка урезается
//и в конец добавляется «…», так чтобы длина отрезанной строки вместе с «…» (три точки)
//равнялась переданному числу  f('abcdefg',5) -> 'ab…'

function cutString(str, limit) {
  var cutStr = str.slice(0, limit - 3) + '«...»';
  if (limit < str.length) {
    return cutStr;
  }

  return str;
}
var str0 = 'abcdefg';
var str1 = 'Hello World';
var str2 = 'How many cans can a canner can if a canner can can cans?';
console.log(cutString(str0, 6));
console.log(cutString(str1, 10));
console.log(cutString(str2, 25));
