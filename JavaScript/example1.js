<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <h1>selector test</h1>

  <ul>
    <li>apple</li>
    <li>orange</li>
    <li>banana</li>
    <li>grape</li>
    <li>strawberry</li>
  </ul>

</body>
</html>

// 1. DOM API를 사용해서, strawberry 아래에 새로운 과일을 하나 더 추가.
// 추가 된 이후에는 다시 삭제.
var parent = document.querySelector("ul");
var tomato = document.createElement("li");
var tomatoText = document.createTextNode("tomato");

tomato.appendChild(tomatoText);
parent.appendChild(tomato);

parent.removeChild(tomato);

// 2. insertBefore메서드를 사용해서, orange와  banana 사이에 새로운 과일을 추가.
var parent = document.querySelector("ul");
var tomato = document.createElement("li");
var tomatoText = document.createTextNode("tomato");
tomato.appendChild(tomatoText);

var banana = document.querySelector("li:nth-child(3)");
parent.insertBefore(tomato, banana);

// 3. 실습2를 insertAdjacentHTML메서드를 사용해서, orange와 banana 사이에 새로운 과일을 추가.
var banana = document.querySelector("li:nth-child(3)");
banana.insertAdjacentHTML("beforebegin", "<li>tomato</li>");
// 또는
var orange = document.querySelector("li:nth-child(2)");
orange.insertAdjacentHTML("afterend", "<li>tomato</li>");

// 4. apple을 grape 와 strawberry 사이로 옮기시오.
var parent = document.querySelector("ul");
var apple = parent.firstElementChild;
var strawberry = parent.lastElementChild;

parent.insertBefore(apple, strawberry);
