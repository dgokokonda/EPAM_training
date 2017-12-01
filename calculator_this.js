'use strict';
function Calculator() {
  var currentState = 0;
  
    this.add = function(a) {

      return function(b) {
        this.currentState = a + b;
      }.bind(this);
    }
    this.substract = function(a) {

      return function(b) {
        this.currentState = a - b;
      }.bind(this);
    }
    this.multiply = function(a) {

      return function(b) {
        this.currentState = a * b;
      }.bind(this);
    }
    this.divide = function(a) {

      return function(b) {
        this.currentState = a / b;
      }.bind(this)
    }
    this.reset = function() {
        this.currentState = 0;
    }
    this.result = function() {
      return this.currentState;
    }
  
}
var calc = new Calculator;
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