//Написать функцию, которая посчитает сколько раз каждый символ встречается в строке
//f(‘abbac’) // в консоле a:2, b:2, c:1

function countSymb(str) {
  var list = {};
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (!(str[i] in list)) {
      list[str[i]] = 0;
    }
  }
  console.log(list);
  for (var j in list) {
    for (var k = 0; k < str.length; k++) {
      if (str.charAt(k) === j) {
        list[j]++;
      }
    }
  }
  console.log(list);
}

var tongueTwister = 'Twelve twins twirled twelve twigs';
countSymb(tongueTwister);
