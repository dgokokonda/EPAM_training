'use strict';
var list = [];
var listDOM = []; 
var todoId = 1;
var Todo = function(id, body, status) {
    this.id = id;
    this.body = body;
    this.status = status;
};

var addTodo = function() {
    if (event.keyCode != 13 || document.getElementsByTagName('input')[0].value === '') return;
    list.push(new Todo(todoId, document.getElementsByTagName('input')[0].value, true));
    todoId++;
    document.getElementsByTagName('input')[0].value = '';
    display(list[list.length-1]);
};

var delTodo = function() {
    var id = event.target.id.substring(4);
    for (var i = 0; i<list.length; i++) {
        if (list[i].id == +id) {
            list.splice(i, 1);
            break;
        }
    };
};
var changeStatus = function() {
    var id = event.target.id.substring(3);
    list.forEach(function(elem) {
        if (elem.id == +id) {
            elem.status = !elem.status;
        }
    });
};

var display = function(elem) {
    listDOM.push(document.createElement('div'));
    listDOM[listDOM.length-1].className = 'input';
    document.getElementsByClassName('list')[0].appendChild(listDOM[listDOM.length-1]);
    var aprove = document.createElement('div');
    aprove.className = 'approve';
    aprove.id = 'id-' + elem.id;
    var change = document.createElement('div');
    change.className = 'button';
    change.id = 'id+' + elem.id;
    change.onclick = changeStatus;
    aprove.appendChild(change);
    listDOM[listDOM.length-1].appendChild(aprove);
    var form = document.createElement('div');
    form.className = 'form';
    form.innerText = elem.body;
    form.id = 'form-' + elem.id;
    listDOM[listDOM.length-1].appendChild(form);
    var del = document.createElement('div');
    del.className = 'delete';
    del.id = 'del-' + elem.id;
    del.onclick = delTodo;
    listDOM[listDOM.length-1].appendChild(del);
};

