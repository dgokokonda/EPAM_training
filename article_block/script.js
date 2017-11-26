//container
var container = document.createElement('div');
container.style.width = '95%';
//container.style.height = window.innerHeight - 50 + 'px';
container.style.margin = '10px';
container.style.background = '#c3f7e9';
container.style.borderRadius = '8px';
container.style.border = '2.2px solid #09bd87';
container.style.height = window.innerHeight - 20 + 'px';
container.style.marginLeft = 'auto';
container.style.marginRight = 'auto';
document.body.appendChild(container);

//main properties
var main = document.createElement('div');
//main.style.height = '95%';
main.style.width = '95%';
main.style.height = window.innerHeight - 55 + 'px';
main.style.margin = '15px 5px';
main.style.border = '1.4px solid #00d1a0';
main.style.position = 'relative';
main.style.background = 'white';
main.style.marginLeft = 'auto';
main.style.marginRight = 'auto';
container.appendChild(main);

//header box
var header = document.createElement('div');
header.style.height = '10%';
header.style.width = '100%';
header.style.position = 'relative';
header.style.background = 'linear-gradient(#fff352  10%, #ffd700 95%)';
main.appendChild(header);

//triangle element
var triangle = document.createElement('div');
triangle.style.left = '1.875em';
triangle.style.width = '0';
triangle.style.border = window.innerHeight * 0.03 + 'px' + ' solid transparent';
triangle.style.borderTop = window.innerHeight * 0.03 + 'px' + ' solid #ffd700';
//triangle.style.border = '1.250em solid transparent';
//triangle.style.borderTop = '1.250em solid #ffd700';
triangle.style.position = 'relative';
main.appendChild(triangle);

//text box
var content = document.createElement('div');
content.style.marginLeft = '1.563em';
content.style.marginRight = '1.563em';
content.style.top = '-.625em';
content.style.fontFamily = 'Counter New';
content.style.position = 'relative';
content.innerHTML =
  'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.';
content.style.color = '#777';
content.style.fontSize = window.innerHeight * 0.026 + 'px';
//content.style.fontSize = '1em';
main.appendChild(content);

//header content
var headTitle = document.createElement('div');
headTitle.innerHTML = 'Header';
headTitle.style.fontFamily = 'Counter New';
//headTitle.style.fontSize = '2em';
headTitle.style.fontSize = window.innerHeight * 0.05 + 'px';
headTitle.style.position = 'relative';
headTitle.style.marginLeft = '.938em';
headTitle.style.paddingTop = '0.25em';
header.appendChild(headTitle);

window.onresize = function() {
  container.style.height = window.innerHeight - 20 + 'px';
  main.style.height = window.innerHeight - 55 + 'px';
  triangle.style.border =
    window.innerHeight * 0.03 + 'px' + ' solid transparent';
  triangle.style.borderTop =
    window.innerHeight * 0.03 + 'px' + ' solid #ffd700';
  headTitle.style.fontSize = window.innerHeight * 0.05 + 'px';
  content.style.fontSize = window.innerHeight * 0.026 + 'px';
};
