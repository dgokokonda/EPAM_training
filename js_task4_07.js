//Написать функцию, которая принимает строку в другую строку, после переданного номера слова
//f(‘I am cool’,’very’,1) -> ‘I am very cool’

function editString(str, word, pos) {
  var array = str.split(' ');
  array.splice(pos, 0, word);
  return array.join(' ');
}

var example = 'I have seen cats today';
console.log(editString(example, 'two', 3));
