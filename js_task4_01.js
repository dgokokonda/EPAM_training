//Написать функцию, которая удаляет первый или/и последний пробел с строке и
//возарщает строку без начального и завершающего пробела.f(‘ abc’) -> ‘abc’ f(‘abc ’) -> ‘abc’

//Самый короткий вариант:
function noSpace(str) {
  return str.replace(/^\s+|\s+$/g, '');
}
var strWithSpace = '   Twelve twins twirled twelve twigs ';
console.log(noSpace(strWithSpace));

//Второй вариант:
function cutSpace(str) {
  var cutStr = ''; //создание переменной не обязательно
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === ' ') {
      cutStr = str.slice(i + 1);
    } else {
      break;
    }
  }
  for (var j = cutStr.length - 1; j > 0; j--) {
    if (cutStr.charAt(j) === ' ') {
      cutStr = cutStr.slice(0, j);
    } else {
      break;
    }
  }
  return cutStr;
}

var strWithSpace = '       Twelve twins twirled twelve twigs   ';
console.log(cutSpace(strWithSpace));
