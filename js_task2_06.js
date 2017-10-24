function isPrime(n) {
  if (n < 2 || n > 1000) {
    return n + ' неверные данные';
  }
  var a = 'простое число';
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      a = 'составное число';
    }
  }
  return n + ' ' + a;
}

console.log(isPrime(1001));
