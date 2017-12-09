'use strict';

var currentState = 0;
function a(val) {
  document.getElementById('display').value += val;
}

function add(val) {
  document.getElementById('display').value += val;
  /*return function a(val) {
    this.currentState += val;
  };*/
}
function substract(val) {
  document.getElementById('display').value += val;
}
function multiply(val) {
  document.getElementById('display').value += val;
}
function divide(val) {
  document.getElementById('display').value += val;
}
function result() {
  try {
    currentState = document.getElementById('display').value;
    var out = eval(currentState);
    document.getElementById('display').value = out;
  } catch (err) {
    document.getElementById('display').value = 'Error.Use only numbers!';
  }
}

/*function Calculator() {
  var currentState = 0;

  this.add = function(a) {
    currentState += a;
    return function(b) {
      currentState = a + b;
    };
  };
  this.substract = function(a) {
    currentState -= a;
    return function(b) {
      currentState = a - b;
    };
  };
  this.multiply = function(a) {
    currentState *= a;
    return function(b) {
      currentState = a * b;
    };
  };
  this.divide = function(a) {
    currentState /= a;
    return function(b) {
      currentState = a / b;
    };
  };
  this.reset = function() {
    currentState = 0;
  };
  this.result = function() {
    return currentState;
  };
}
var calc = new Calculator();
calc.add(2)(3);
calc.multiply(3);
calc.divide(2);
console.log(calc.result());
*/
