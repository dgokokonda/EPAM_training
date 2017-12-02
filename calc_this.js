'use strict';
function Calculator() {
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

calc.reset();
console.log(calc.result());
