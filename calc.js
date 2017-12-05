function Calculator() {
    var currentState = 0;

    this.add = function(a) {
      currentState += parseInt(a);
      return function(b) {
          return currentState += parseInt(b);
      }
    }
    this.result = function() {
        return currentState;
    }
}
var calc = new Calculator();
var operands=['',''];
var curOperands = 0;
var currentFunc = null;
var isOperator = true;


document.querySelectorAll('.number').addEventListener('click', function() {
    if(event.target.className === 'btn') {
        document.querySelectorAll('.display').innerHTML += event.target.innerHTML;
        operands[curOperands] +=event.value.innerHTML;
    }
})
document.querySelectorAll('.add').addEventListener('click', function() {
    currentFunc = calc.add();
    if (operands !== '') {

    }
    document.querySelectorAll('.display').innerHTML = calc.add();
    curOperands=1;
    isOperator = false;
})
document.querySelectorAll('.result').addEventListener('click', function() {
    currentFunc(operands[0],operands[1]);
    //operands=[curOperands[0],curOperands[1]];
    document.querySelectorAll('.display').innerHTML = calc.result();
    operands=[result[operands],''];
    
})