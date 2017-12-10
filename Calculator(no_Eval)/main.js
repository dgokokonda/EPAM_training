var Calculator = function() {
  var result = 0;
  this.add = function(a) {
    result = parseInt(a);
    return function(b) {
      result += parseInt(b);
    };
  };
  this.substract = function(a) {
    result = parseInt(a);
    return function(b) {
      result -= parseInt(b);
    };
  };
  this.multiply = function(a) {
    result = parseInt(a);
    return function(b) {
      result *= parseInt(b);
    };
  };
  this.divide = function(a) {
    result = parseInt(a);
    return function(b) {
      result /= parseInt(b);
    };
  };
  this.reset = function() {
    result = 0;
  };
  this.getResult = function() {
    return result;
  };
};

function action() {
  var calc = new Calculator();
  var operands = ['', ''];
  var curOperands = 0;
  var currentFunc = null;
  var isOperator = true;
  var container = document.getElementById('container');
  var calcItem = document.createElement('div');
  calcItem.setAttribute('class', 'calculator');
  container.appendChild(calcItem);

  var display = document.createElement('div');
  display.className = 'display';
  calcItem.appendChild(display);

  var input = document.createElement('p');
  input.className = 'calc-input';
  input.setAttribute('type', 'text');
  display.appendChild(input);

  var output = document.createElement('p');
  output.className = 'calc-output';
  output.setAttribute('type', 'text');
  display.appendChild(output);

  var buttons = document.createElement('div');
  buttons.className = 'buttons';
  calcItem.appendChild(buttons);

  var number = document.createElement('div');
  number.className = 'number';
  buttons.appendChild(number);

  var op = document.createElement('div');
  op.className = 'op';
  buttons.appendChild(op);

  var keys = [];
  for (var i = 0; i < 10; i++) {
    keys.push(document.createElement('button'));
    keys[i].innerHTML = i + 1;
    keys[i].className = 'num';
    number.appendChild(keys[i]);
  }

  keys.push(document.createElement('button'));
  keys[9].innerHTML = '0';
  number.appendChild(keys[9]);
  keys.push(document.createElement('button'));
  keys[10].innerHTML = '+';
  keys[10].className = 'add';
  op.appendChild(keys[10]);
  keys.push(document.createElement('button'));
  keys[11].innerHTML = '-';
  keys[11].className = 'substract';
  op.appendChild(keys[11]);
  keys.push(document.createElement('button'));
  keys[12].innerHTML = '*';
  keys[12].className = 'multiply';
  op.appendChild(keys[12]);
  keys.push(document.createElement('button'));
  keys[13].innerHTML = '/';
  keys[13].className = 'divide';
  op.appendChild(keys[13]);
  keys.push(document.createElement('button'));
  keys[14].innerHTML = 'C';
  keys[14].className = 'reset';
  buttons.appendChild(keys[14]);
  keys.push(document.createElement('button'));
  keys[15].innerHTML = '=';
  keys[15].className = 'result';
  buttons.appendChild(keys[15]);

  keys.forEach(function(elem) {
    elem.id = 'btn';
  });

  keys.forEach(function(element, index) {
    element.addEventListener('click', function(e) {
      if (event.target.className === 'num') {
        isOperator = true;
        input.innerHTML += event.target.innerHTML;
        operands[curOperands] += event.target.innerHTML;
      }
    });
  });
  keys[10].addEventListener('click', function() {
    if (isOperator) {
      if (operands[0] !== '') {
        currentFunc = calc.add(operands[0]);
      }
      input.innerHTML += event.target.innerHTML;
      curOperands = 1;
      isOperator = false;
    }
  });
  keys[11].addEventListener('click', function() {
    if (isOperator) {
      if (operands[0] !== '') {
        currentFunc = calc.substract(operands[0]);
      }
      input.innerHTML += event.target.innerHTML;
      curOperands = 1;
      isOperator = false;
    }
  });
  keys[12].addEventListener('click', function() {
    if (isOperator) {
      if (operands[0] !== '') {
        currentFunc = calc.multiply(operands[0]);
      }
      input.innerHTML += event.target.innerHTML;
      curOperands = 1;
      isOperator = false;
    }
  });
  keys[13].addEventListener('click', function() {
    if (isOperator) {
      if (operands[0] !== '') {
        currentFunc = calc.divide(operands[0]);
      }
      input.innerHTML += event.target.innerHTML;
      curOperands = 1;
      isOperator = false;
    }
  });
  keys[15].addEventListener('click', function() {
    currentFunc(operands[1]);
    output.innerHTML = calc.getResult();
    operands = [calc.getResult(), ''];
    curOperands = 1;
    currentFunc = null;
  });
  keys[14].addEventListener('click', function() {
    currentFunc = calc.reset();
    input.innerHTML = '';
    output.innerHTML = '';
    curOperands = 0;
    operands = ['', ''];
  });
}
