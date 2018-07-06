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
    <li class="red">apple</li>
    <li class="red">orange</li>
    <li>banana</li>
    <li>grape</li>
    <li>strawberry</li>
  </ul>

</body>
</html>

// 5. class 가 'red'인 노드만 삭제.
var reds = document.querySelectorAll("li.red");
var parent = document.querySelector("ul");

for(var i=0; i<reds.length; i++) {
    parent.removeChild(reds[i]);
}
