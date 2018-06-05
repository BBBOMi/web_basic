/* Event - 브라우저에서 무엇인가를 하면 이벤트가 발생함
         - 마우스로 조절, 스크롤, 마우스 이동 등
         - HTML엘리먼트별로 어떤 이벤트가 발생했을 때, 특정 행위를 하고 싶다면 대상 엘리먼트에 행위를 등록
*/

/* 이벤트 등록 표준방법 */
var el = document.getElementById("outside");
el.addEventListener("click", fuction() {
  //do somethig
}, false);
// addEventListener 함수의 두번째 인자 함수는 나중에 이벤트가 발생할 때 실행되는 함수로,
// 이벤트핸들러(Event Handler) 또는 이벤트리스너(Event Listener)라고 함

/* 이벤트 객체 - 브라우저는 이벤트 리스너를 호출할 때,
                사용자로부터 어떤 이벤트가 발생했는지에 대한 정보를 담은 이벤트 객체를 생성, 리스너 함수에 전달
*/
var el = document.getElementById("outside");
el.addEventListener("click", function(evt) {
    console.log(evt.target); // 이벤트가 발생한 element
    console.log(evt.target.nodeName); // 이벤트가 발생한 element의 nodeName
                                      // element도 객체이므로 element가 가진 속성을 사용 할 수 있다
}, false);
