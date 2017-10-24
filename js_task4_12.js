//Написать функцию, которая возвращает случайное целое число в диапазоне от 0 до 100
//f() -> 56; f()->33

function randomWholeNum(min, max) {
  var num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

console.log(randomWholeNum(0, 100));
