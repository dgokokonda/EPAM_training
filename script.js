var main = document.getElementById('main');
var input = document.getElementsByClassName('toDoText');
var selectAll = document.querySelector('input[type=checkbox]');
var complete = document.getElementById('complete');
var active = document.getElementById('active');
var all = document.getElementById('all');
var clear = document.getElementById('clear');

var items = []; //хранилище данных
var itemId = 1; //id для каждого item
items = JSON.parse(localStorage.getItem('items')); //привязка localStorage

var List = function(id, title, completed) {
  this.id = id;
  this.title = title;
  this.completed = completed;
};

//добавление items:
var addItem = function() {
  if (input[0].value === '' || event.keyCode != 13) return;
  items.push(new List(itemId.toString(), input[0].value, false)); //применение конструктора для items
  itemId++;
  input[0].value = '';
  // вызов функции отображения добавленного item:
  showItem(items[items.length - 1]);
  //вызов функции-счетчика оставшихся активных item:
  itemsLeft();
  storeDisplay();
};

// проверка статуса completed:
var statusItem = function() {
  var checkItems = document.querySelectorAll('.check');
  var id = event.target.id.substring(3);
  items.forEach(function(elem) {
    if (elem.id == +id) {
      elem.completed = !elem.completed;
    }
    //показ и скрытие кнопок clear и selectAll (проверка статуса для кнопок):
    if (elem.completed === true) {
      clear.style.display = 'block';
      selectAll.style.display = 'block';
    } else {
      clear.style.display = 'none';
      selectAll.style.display = 'none';
    }
  });
  checkItems.forEach(function(elem) {
    if (!elem.checked === false) {
      clear.style.display = 'block';
      selectAll.style.display = 'block';
    }
    if (elem.checked === false) {
      selectAll.checked = false;
    }
  });
  itemsLeft();
  storeDisplay();
};

//визуализация html-элементов:
var showItem = function(e) {
  var toDo = document.createElement('div');
  toDo.className = 'item';
  toDo.id = 'id' + e.id;
  main.appendChild(toDo);

  var check = document.createElement('input');
  check.type = 'checkbox';
  check.className = 'check';
  check.id = 'id+' + e.id;
  check.onclick = statusItem;
  toDo.appendChild(check);

  var label = document.createElement('label');
  label.innerText = e.title;
  label.id = 'item' + e.id;
  label.setAttribute('for', 'id+' + e.id);
  toDo.appendChild(label);

  var del = document.createElement('button');
  del.className = 'delete';
  del.addEventListener('click', function deleteItem() {
    items.splice(items.indexOf(e), 1);
    this.parentElement.remove();
    itemsLeft();
    storeDisplay();
  });
  del.id = 'del' + e.id;
  var icon = document.createElement('i');
  icon.className = 'fa fa-trash-o';
  icon.setAttribute('aria-hidden', 'true');
  del.appendChild(icon);
  toDo.appendChild(del);
};

//функция для кнопки selectAll(+показ/скрытие кнопки):
var allSelected = function() {
  var checkItems = document.querySelectorAll('.check');
  if (checkItems.length) {
    selectAll.style.display = 'block';
    if (selectAll.checked) {
      items.forEach(function(elem) {
        elem.completed = true;
      });
      checkItems.forEach(function(e) {
        e.checked = true;
      });
      clear.style.display = 'block';
    } else {
      items.forEach(function(elem) {
        elem.completed = false;
      });
      checkItems.forEach(function(e) {
        e.checked = false;
        selectAll.style.display = 'none';
        clear.style.display = 'none';
      });
    }
  }
  if (!checkItems.length) {
    selectAll.style.display = 'none';
    clear.style.display = 'none';
  }
  itemsLeft();
  storeDisplay();
};

//фильтр завершенных ToDo
var showCompleted = function() {
  var checkItems = document.querySelectorAll('.check');
  checkItems.forEach(function(elem) {
    if (elem.checked === false) {
      elem.parentElement.style.display = 'none';
    } else elem.parentElement.style.display = 'block';
  });
};

//фильтр активизированных ToDo
var showActive = function() {
  var checkItems = document.querySelectorAll('.check');
  checkItems.forEach(function(elem) {
    if (elem.checked === true) {
      elem.parentElement.style.display = 'none';
    } else {
      elem.parentElement.style.display = 'block';
    }
  });
};

//показать все активные и завершенные ToDo
var showAll = function() {
  var checkItems = document.querySelectorAll('.check');
  checkItems.forEach(function(elem) {
    elem.parentElement.style.display = 'block';
  });
};

//функция для кнопки clearCompleted (+показ/скрытие кнопки):
var clearCompleted = function() {
  var checkItems = document.querySelectorAll('.check');

  if (checkItems.length) {
    checkItems.forEach(function(elem) {
      if (elem.checked === true) {
        elem.parentElement.remove();
      } else return;
    });
    for (var i = items.length - 1; i >= 0; --i) {
      if (items[i].completed === true) {
        items.splice(i, 1);
      }
    }
  }
  if (!checkItems.length) {
    clear.style.display = 'none';
  }
  allSelected();
  itemsLeft();
  selectAll.checked = false;
  storeDisplay();
};

//отображение дисплея со списком items:
if (items == null) {
  items = [];
} else {
  items.forEach(function(elem) {
    showItem(elem);
  });
}
//сохранение дисплея со списком items:
var storeDisplay = function() {
  var storage = JSON.stringify(items);
  localStorage.setItem('items', storage);
};

//how many active items left:
var itemsLeft = function() {
  var counter = document.getElementById('count');
  var count = 0;
  items.forEach(function(elem) {
    if (elem.completed === false) {
      count++;
    }
  });
  if (count === 1) {
    counter.innerText = count;
    document.getElementById('item').innerText = 'item left';
  } else {
    counter.innerText = count;
    document.getElementById('item').innerText = 'items left';
  }
};
