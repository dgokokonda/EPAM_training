//styles for submenu
var styles = {
  width: '180px',
  height: '30px',
  background: '#8080ff',
  color: 'white',
  fontSize: '30px',
  textAlign: 'center'
};

//container for Menu element
var container = document.createElement('div');
container.style.width = '300px';
container.style.height = '800px';
document.body.appendChild(container);

//target for menu
var target = document.createElement('a');
container.appendChild(target);
target.setAttribute('href', '#');
target.style.textDecoration = 'none';

//menu properties
var menu = document.createElement('div');
menu.innerHTML = 'Top Menu';
menu.style.borderBottomRightRadius = '10px';
menu.style.borderBottomLeftRadius = '10px';
for (var key in styles) {
  menu.style[key] = styles[key];
}
target.appendChild(menu);

//submenu properties
var submenu = document.createElement('div');
submenu.style.height = '150px';
submenu.style.width = '180px';
submenu.style.display = 'none';
submenu.style.borderBottom = 'solid 2px grey';
container.appendChild(submenu);

//target for submenu
var target1 = document.createElement('a');
submenu.appendChild(target1);
target1.setAttribute('href', '#');
target1.style.textDecoration = 'none';

//adding list of submenu
var menuList = [];
for (var i = 0; i < 5; i++) {
  menuList.push(document.createElement('div'));
  menuList[i].innerHTML = 'Menu ' + (i + 1);
  target1.appendChild(menuList[i]);
  for (var key in styles) {
    menuList[i].style[key] = styles[key];
  }
}

//events properties (hover and click)
var checkClick;
menu.addEventListener('mouseover', function() {
  checkClick = true;
});
menu.addEventListener('mouseout', function() {
  checkClick = false;
});
menu.addEventListener('click', function() {
  submenu.style.display = 'block';
  document.body.insertBefore(submenu, document.body.firstChild);
});

document.body.addEventListener('click', function() {
  if (checkClick) {
    return;
  } else {
    submenu.style.display = 'none';
  }
});
menu.onmouseover = function() {
  if (submenu.style.display === 'block') {
    return;
  }
  menu.style.boxShadow = '0 0 5px 5px #d5edf0';
};
menu.onmouseout = function() {
  menu.style.boxShadow = 'none';
};
menuList.forEach(function(el) {
  el.onmouseover = function() {
    el.style.background = '#8b00ff';
    target.removeAttribute('href');
  };
});
menuList.forEach(function(el) {
  el.onmouseout = function() {
    el.style.background = '#8080ff';
  };
});
