'use strict';
function calculator() {
  var currentState = 0;
  return {
    add: function(a) {
      return function(b) {
        currentState = a + b;
      };
    },
    substract: function(a) {
      return function(b) {
        currentState = a - b;
      };
    },
    multiply: function(a) {
      return function(b) {
        currentState = a * b;
      };
    },
    divide: function(a) {
      return function(b) {
        currentState = a / b;
      };
    },
    reset: function() {
      currentState = 0;
    },
    result: function() {
      return currentState;
    }
  };
}
var calc = calculator();
calc.add(2)(3);
console.log(calc.result());
calc.substract(2)(3);
console.log(calc.result());
calc.divide(2)(3);
console.log(calc.result());
calc.multiply(2)(3);
console.log(calc.result());
calc.reset();
console.log(calc.result());
