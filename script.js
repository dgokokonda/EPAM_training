var listContainer = document.getElementById('main');

var addToDo = document.createElement('input');
addToDo.id = 'search';
addToDo.setAttribute('placeholder', 'What needs to be done?');
addToDo.setAttribute('value', '');
listContainer.appendChild(addToDo);
/*
var li = document.createElement('div');
li.innerHTML = '123';
listContainer.appendChild(li);

var li = document.createElement('div');
li.innerHTML = '456';
listContainer.appendChild(li);*/
function addTodo() {
if (addTodo.value) {
    if(keyCode === 13) {
        var li = document.createElement('div');
        li.innerHTML = addToDo.value;
        listContainer.appendChild(li);
    }
}
}

<form action="aaa.php" method="post"><textarea class="ctrlSubmit"></textarea></form>
<form action="bbb.php" method="get"><textarea class="ctrlSubmit"></textarea></form>
<script>
var t = document.getElementsByTagName('textarea');
var i = 0;while(t[i]){
    if(/ctrlSubmit/.test(t[i].className)){
        t[i].onkeyup = function(e){
            e = window.event || e;
            if(e.keyCode == 13 && e.ctrlKey){
                alert(this.value);
                //ну или this.form.submit();
            }
        }
    }
    ++i;
}
</script>

/*window.onload = function() {

    for (var a=0; a<5; a++) {
        var li = document.createElement('div');
        li.innerHTML.html = '111';
        li.id = a+1;
        listContainer.appendChild(li);

    }
}
onload();*/
//.cloneNode()

//listContainer.removeChild(li);