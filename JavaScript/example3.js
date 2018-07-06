<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <h1>selector test</h1>

<section>
  <h2> red section </h2>
  <ul>
    <li class="red">apple</li>
    <li class="red">orange</li>
    <li>banana</li>
    <li>grape</li>
    <li>strawberry</li>
  </ul>
</section>

  <Br>

<section>
  <h2> blue section </h2>
  <ul>
    <li class="green blue">apple</li>
    <li class="red">orange</li>
    <li>banana</li>
    <li>grape</li>
    <li>strawberry</li>
  </ul>
</section>

</body>
</html>

// 6. section 태그의 자손 중에 blue라는 클래스를 가지고 있는 노드가 있다면, 그 하위에 있는 h2 노드를 삭제.
var bluenode = document.querySelectorAll("section .blue");

for(var i=0; i<bluenode.length; i++) {
  var section = bluenode[i].closest("section");
  var h2 = section.querySelector("h2");
  section.removeChild(h2);
}
