'use strict';
function Calculator() {
  var currentState = 0;
  
    this.add = function(a) {

        
        return function(b) {
            if (!arguments.length) {
                return currentState;
            }
            if (arguments.length ===2) {
                return currentState = a + b;
            }
            else {
                return currentState += a;
            }
        }
        
    };

    this.substract = function(a) {
        if (!arguments.length) {
            return currentState;
        }
        if (arguments.length ===2) {
            return currentState = a - b;
        }
        else {
            currentState -= a;
        }
      };

    this.multiply = function(a) {
        if (!arguments.length) {
            return currentState;
        }
        if (arguments.length ===2) {
            return currentState = a * b;
        }
        else {
            currentState *= a;
        }
      };

    this.divide = function(a) {
        if (!arguments.length) {
            return currentState;
        }
        if (arguments.length ===2) {
            return currentState = a / b;
        }
        else {
            currentState /= a;
        }
      };

    this.reset = function() {
        return currentState = 0;
    }
    this.result = function() {        
            return currentState;
    }
}
var calc = new Calculator();
calc.add(2)(4);

console.log(calc.result());
calc.substract(2)(3);
console.log(calc.result());
calc.divide(2)(3);
console.log(calc.result());
calc.multiply(2)(3);
console.log(calc.result());
calc.reset();
console.log(calc.result());