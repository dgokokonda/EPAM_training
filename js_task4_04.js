//Написать функцию, которая принимает строку и возвращает эту же строку,
//на с заглавным первым символом каждого слова
//f(‘I am cool’) -> ‘I Am Cool’

//Вариант с разрезанием строки на массив:
function isCapitalLetter(str) {
  //return str.replace(/\b(.)/g, function(s) {return s.toUpperCase();
  var arr = str.split('');
  arr[0] = arr[0].toUpperCase();
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      arr[i + 1] = arr[i + 1].toUpperCase();
    }
  }
  return arr.join('');
}

var str1 = 'twelve twins twirled twelve twigs';
console.log(isCapitalLetter(str1));

//Вариант без массива, с копированием строки:

function isCapLet(str) {
  str = str[0].toUpperCase() + str.slice(1);
  for (var i = 1; i < str.length; i++) {
    if (str.charAt(i) === ' ') {
      str = str.slice(0, i + 1) + str[i + 1].toUpperCase() + str.slice(i + 2);
    } else {
      continue;
    }
  }
  return str;
}

var str1 = 'twelve    twins twirled   twelve twigs';
console.log(isCapLet(str1));


str.toLowerCase().split('');
str[0].toUpperCase() + str.slice(1);
str.forEach(function(item,i,str) {
  if (str[item] === ' ' ) {
    str = str.slice(1,item+1) + str[item+1].toUpperCase() + str.slice(item+2);
  } else {
    continue;
  }
});
return str;