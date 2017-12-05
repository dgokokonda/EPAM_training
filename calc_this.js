'use strict';

function Calculator() {
  var currentState = 0;
  var allNumbers = [];
  var str = '';
  var buffer = [];

  this.add = function(a) {
    currentState += a;
    return function(b) {
      if (b) {
        return (currentState = a + b);
      } else {
        return currentState;
      }
    };
  };
  this.substract = function(a) {
    currentState -= a;
    return function(b) {
      if (b) {
        return (currentState = a - b);
      } else {
        return currentState;
      }
    };
  };
  this.multiply = function(a) {
    currentState *= a;
    return function(b) {
      if (b) {
        return (currentState = a * b);
      } else {
        return currentState;
      }
    };
  };
  this.divide = function(a) {
    currentState /= a;
    return function(b) {
      if (b) {
        return (currentState = a / b);
      } else {
        return currentState;
      }
    };
  };
  /*
  this.addBuffer = function(num) {
    if (!num) {
      str = '';
    } else {
      str += num;
    }
  };
  this.getBuffer = function() {
    return str;
  };*/

  this.reset = function() {
    currentState = '';
    str = '';
    allNumbers = [];
  };

  this.result = function() {
    allNumbers = [];
    return currentState;
  };
  var add = document.getElementById('add'),
    subtract = document.getElementById('subtract'),
    multiply = document.getElementById('multiply'),
    divide = document.getElementById('divide'),
    reset = document.getElementById('reset'),
    equals = document.getElementById('equals'),
    numbers = document.querySelectorAll('.number');

  for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function(event) {
      var parseInteger = parseFloat(event.target.value);
      allNumbers.push(parseInteger);
      document.getElementById('display').value += event.target.value;
      //calc.inputNumbers();
      console.log(allNumbers);
    });
  }

  add.addEventListener('click', function(event) {
    document.getElementById('display').value += '+';
    allNumbers.push('+');
  });
  substract.addEventListener('click', function(event) {
    document.getElementById('display').value += '-';
    allNumbers.push('-');
  });
  multiply.addEventListener('click', function(event) {
    document.getElementById('display').value += '*';
    allNumbers.push('*');
  });
  divide.addEventListener('click', function(event) {
    document.getElementById('display').value += '/';
    allNumbers.push('/');
  });

  equals.addEventListener('click', function(event) {
    var a = allNumbers[0],
      b = allNumbers[2],
      sign = allNumbers[1];
    /*for (var j = 0; j < allNumbers.length; j++) {
      var a = allNumbers.slice(0, j - 1),
        b = allNumbers.slice(j + 1),
        sign = allNumbers[j];
      console.log(allNumbers);
      if (allNumbers[j] !== 'C' && allNumbers[j] !== '') {
        calc.addBuffer(allNumbers[j]);
        document.getElementById('display').value = calc.getBuffer();
        console.log(getBuffer);
      }*/
    if (sign === '+') {
      /*buffer.push(a);
        buffer.push(sign);
        buffer.push(b);*/
      calc.add(a)(b);
      document.getElementById('display').value = calc.result();
      allNumbers.push(currentState);
    } else if (sign === '-') {
      calc.substract(a)(b);
      document.getElementById('display').value = calc.result();
      allNumbers.push(currentState);
    } else if (sign === '*') {
      /*a = allNumbers.slice(0, j - 1).join('');
        b = allNumbers.slice(j + 1).join('');*/
      calc.multiply(a)(b);
      document.getElementById('display').value = calc.result();
      allNumbers.push(currentState);
    } else if (sign === '/') {
      calc.divide(a)(b);
      document.getElementById('display').value = calc.result();
      allNumbers.push(currentState);
    }
    //}
    //console.log(allNumbers);
  });

  reset.addEventListener('click', function(event) {
    calc.reset();
    document.getElementById('display').value = calc.result();
  });
}

var calc = new Calculator();
calc.result();
