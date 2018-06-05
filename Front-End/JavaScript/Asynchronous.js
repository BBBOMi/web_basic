/* window 객체 - window는 디폴트 개념이므로 생략 가능 */
window.setTimeout();
setTimeout(); // window는 전역객체라서 생략 가능

/* setTimeout 활용 - 비동기적(asynchronous) : 전 명령의 수행이 끝나지 않아도 다음 명령을 실행
                   - 인자를 함수(콜백 함수)로 받는다
*/
function run() {
  console.log("start");
  setTimeout(function() {
    var msg = "hello";
    console.log(msg); // 이 메세지는 즉시 실행되지 않습니다.
    console.log("...ing");
  }, 1000);
  console.log("end");
}

run(); // start end hello ...ing 순으로 출력
// setTimeout의 실행은 비동기로 실행되어 동기적인 다른 실행이 끝나야 실행
//  -> setTimeout안의 함수(콜백함수)는 run함수의 실행이 끝나고 나서 실행(정확히는 stack에 쌓여있는 함수의 실행이 끝나고 나서 실행됨)
// *콜백(callback)함수 : 보통은 즉시 실행되지 않고, 나중에 필요한 시점에 실행되거나 실행이 안될 수도 있다.(즉시 실행될 수도 있음)
