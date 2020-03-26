var container = document.getElementsByClassName("container"); // using javascript

var jqContainer = $(".jqcontainer"); // using jquery

// add new html inside the container
var html = '<p>Tolus is here learning HTML, CSS, JQuery, JavaScript and GitHub';

// using javascript
container[0].innerHTML = html;

// using jquery
jqContainer.html(html);

// why jquery is not setting html inside a div
// why html inside a div is not showing when set with jquery