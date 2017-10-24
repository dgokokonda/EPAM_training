//Написать функцию, которая возвращает случайное число в диапазоне от min до max
//f(1,5) -> 4; f(1,5)->3

function randomNum(min, max) {
  var num = Math.random() * (max - min);
  return num;
}

console.log(randomNum(0, 5));
