// 각각 리스트에 클릭을 할 때 어떤 이벤트(src추출)가 발생해야 한다고 가정.
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Event_delegation</title>
</head>
<body>

  <ul>
    <li><img src="https://images-na.ssl-images-amazon.com/images/I/513hgSybYgL._AC_SY400_.jpg" class="product-image" ></li>
    <li><img src="https://images-na.ssl-images-amazon.com/images/I/41HoczBHr2L._AC_SY400_.jpg" class="product-image" ></li>
    <li><img src="https://images-na.ssl-images-amazon.com/images/I/51AEI3isFiL._AC_SY400_.jpg" class="product-image" ></li>
    <li><img src="https://images-na.ssl-images-amazon.com/images/I/51JVp8YV3ZL._AC_SY400_.jpg" class="product-image" ></li>
  </ul>

  <section class="log"></section>
</body>
</html>

// 방법 1. li 각각에 addEventListener를 통해 이벤트 등록
var log = document.querySelector(".log");
var lists = document.querySelectorAll("ul > li");

for(var i=0, len=lists.length; i<len; i++) {
  lists[i].addEventListener("click", function(evt) {
    log.innerHTML = "clicked" + evt.currentTarget.firstElementChild.src;
  });
}
/*
  현재, 브라우저는 4개의 이벤트 리스너를 기억(li태그가 4개이므로)
  -> li가 훨씬 더 많으면 브라우저가 기억해야 할 이벤트 리스너도 많아지므로 비효율적

  만약, li가 동적으로 추가된다면 추가된 엘리먼트에도 addEventListener를 해줘야 하므로 비효율적이다
*/

// 방법 2. ul 태그에만 이벤트를 등록
var ul = document.querySelector("ul");
ul.addEventListener("click", function(evt) {
  console.log(evt.currentTarget, evt.target); // "UL" "클릭된 곳의 태그명"
});
/*
  ul, li, img 어떤 것을 클릭해도 이벤트 실행.
  (ul태그에 li나 img태그가 속하기 때문)
  -> 이벤트 버블링

  *이벤트 버블링(event bubbling) : 클릭한 지점이 하위 엘리먼트라고 해도, 그것을 감싸고 있는 상위 엘리먼트까지
                  타고 올라가면서 이벤트 리스너가 있는지 찾는 과정. 반대로 작동하는 capturing도 있음.(default: bubbling)

  따라서, 만약 img, li, ul에 각각 이벤트를 등록했었다면 img 클릭시 3개의 이벤트 리스너가 실행.
*/

// 방법 2-2. 버블링을 이용하여 src추출
var log = document.querySelector(".log");
var ul = document.querySelector("ul");
ul.addEventListener("click", function(evt) {
  if(evt.target.tagName === "IMG") {
    log.innerHTML = "clicked" + evt.target.src;
  }
});
// 동적으로 li 태그가 더 추가되어도 문제없이 작동.
// img태그와 li태그 사이의 공백을 클릭했을 때에 이벤트가 실행되지 않는다는 단점 발생(공백의 tagName이 LI)

// 방법 2-3. 개선
var log = document.querySelector(".log");
var ul = document.querySelector("ul");
ul.addEventListener("click", function(evt) {
  if(evt.target.tagName === "IMG") {
    log.innerHTML = "clicked" + evt.target.src;
  } else if(evt.target.tagName === "LI") {
    log.innerHTML = "clicked" + evt.target.firstElementChild.src;
  }
});
