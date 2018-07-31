/*
  HTML templating : 반복적인 HTML부분을 template로 만들어두고, 서버에서 온 데이터(주로 JSON)을 결합해서,
                화면에 추가하는 작업.

  HTML Template의 보관 : html 문자열을 어딘가 보관해야함.(javascript코드 안에서 정적인 데이터를 보관하는 것은 좋지 않다)
                  - 서버에서 file로 보관하고 Ajax로 요청해서 받아온다.
                  - HTML코드 안에 숨겨둔다(데이터가 간단할 때)
*/

/* HTML Templating 예제 */
<html>
  <header>
    <style>
      li {
        border: 1px solid gray;
        list-style: none;
      }
    </style>
  </header>
  <body>
    <h2>templating test example</h2>
    <ul class = "content"></ul>
  </body>

  <script id="template-list-item" type="text/template">
    <li>
      <h4>{title}</h4><p>{content}</p><div>{price}</div>
    </li>
  </script>
  // html script태그는 type이 javascript가 아니라면 렌더링 하지 않고 무시

  <script>
  // mock data, 서버에서 가져온 데이터
  var data = [
        {title : "hello", content : "lorem", price : 10000},
        {title : "hi", content : "dkfief", price : 20000}
  ];

  // html 에 script에서 가져온 html template
  var html = document.querySelector("#template-list-item").innerHTML;

  var resultHTML = "";
  for(var i=0; i<data.length; i++) {
    resultHTML += html.replace("{title}", data[i].title)
                      .replace("{content}", data[i].content)
                      .replace("{price}", data[i].price);
  }

  document.querySelector("content").innerHTML = resultHTML;
  </script>
</html>
