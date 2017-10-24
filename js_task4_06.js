//Написать функцию, которая принимает строку и возвращает данную строку, но в camelCase нотации
//f(‘User Object’) -> ‘userObject’
function isCamelCase(str) {
  var arr = str.split(' ');

  for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join('');
}

var veryLooongCamel = 'one two three four five six seven t e n';
console.log(isCamelCase(veryLooongCamel));
