//Написать функцию, которая ищет одну строку в другой строке
//и возвращает true, если такая строка найдена.
//f(‘I love cats’, ‘cats’) -> true

function searchStr(str1, str2) {
  //.toLowerCase() - если при поиске строки регистр не имеет значения:
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  var result = str1.indexOf(str2);

  if (result === -1) {
    return false;
  } else {
    return true;
  }
}

var example = 'How many cans can a canner can if a canner can can cans?';
//var searchOfWord1 = 'can';
//var searchOfWord2 = 'how b';
console.log(searchStr(example, 'how b'));
console.log(searchStr(example, 'can i'));
