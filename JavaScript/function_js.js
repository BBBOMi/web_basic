/* 함수 - 함수의 선언
        - 파라미터의 개수와 인자의 개수가 일치하지 않아도 오류가 나지 않는다.
        - 파라미터 개수보다 인자의 개수가 더 많다면 순차적으로 파라미터에 저장
        - 파라미터가 1개 이상 정의된 함수를 호출할 때, 인자의 개수를 0개만 넣어 실행하면
          이미 정의된 파라미터는 undefined라는 값을 가짐. -> 변수는 이미 초기화됐지만, 값이 할당되지 않았기 때문
*/
/* 함수 - 함수선언문 */
function printName(firstName) {
  var myName = "bomi";
  return myName + " " + firstName;
}
console.log(printName()); // bomi undefined 출력

/* 함수 - 함수표현식 : 함수선언문과 달리 선언 호출 순서에 따라서 정상적으로 함수가 실행되지 않을 수 있음 */
function test () {
  console.log(printName());

  var printName = function() { // 함수 표현식
    return 'anonymouse';
  }
}
test(); // TypeError: printName is not a function

/* 함수 - 표현식과 호이스팅(hoisting)
        - hoisting : 자바스크립트는 함수가 실행되기 전에 함수안에 필요한 변수값들을
          미리 다 모아 선언. 모두 끌어올려서 선언한다고 해서 hoisting이라 함.
        - 자바스크립트 parser 내부적으로 처리
        - hoisting으로 인해 표현식이 정상적으로 실행되지 않을 수 있다(함수선언문은 문제X)
*/
function test () {
  console.log(printName()); // printName이라는 변수가 존재, 아직 값 할당전 -> undefined

  var printName = function() {
    return 'anonymouse';
  }
}
test(); // printName()이 undefined이기 때문에 TypeError 발생

// 위 코드와 같은 코드(hoisting)
function test() {
  var printName; // undefined
  console.log(printName());

  printName = function() {
    return 'anonymouse';
  }
}
test(); // TypeError

/* 함수 - 반환값
        - 자바스크립트 함수는 반드시 return값이 존재 한다.(void 타입이 없음)
        - 없을 때는 기본 반환값인 undefined가 반환(return값이 명시되어 있지 않을때. return 구문X)
        - 반환값이 없는 return;도 가능
*/

function prinatName(firstName) {
  var myName = "bomi";
  var result = myName + " " + firstName;
} // return값: undefined

/* 함수 - arguments 객체
        - 함수가 실행되면 그 안에 arguments라는 지역변수 자동 생성
        - arguments타입은 객체
        - 넘어온 인자를 arguments로 배열의 형태로 하나씩 접근 가능(index 0부터 시작)
                        -> 그렇지만, 배열타입은 아님. 배열 메소드 사용 불가
*/
function a() {
  console.log(arguments);
}
a(1, 2, 3); // { '0': 1, '1': 2, '2': 3 } 출력

fuction a() {
  for(var i=0; i<arguments.length; i++) {
    console.log(arguments[i]); // 인덱스로도 접근 가능
  }
}
a(1, 2, 3); // 1 2 3

function a() {
  console.log('my name is ', arguments[2]);
}
a(1, 2, 'bomi'); // my name is bomi

/* 함수 - arrow function : ES6에 추가된 syntax */
function getName(name) {
  return "Kim" + name;
}

var getName = (name) => "Kim" + name; // arrow함수, 위 함수와 같음

/* 함수의 호출 - call stack
              - 함수 호출 관계: bar() -> foo()
              - bar 함수에서 foo를 호출한 후 foo의 결과를 받아올 때 까지 bar함수는 메모리공간 차지
              - return문 실행 후 메모리 공간에서 제거
              - 함수를 연속해서 계속 호출하면 call stack이 꽉차버림
                                  -> Maximum call stack size exceeded 오류 발생
              - 브라우저에서는 대부분 지정된 횟수만큼만 call stack을 쌓게 미리 설정해두는 경우도 있음
*/
function foo(b) {
  var a = 5;
  return a * b + 10;
}

function bar(x) {
  var y = 3;
  return foo(x * y);
}

console.log(bar(6));
// 함수 실행 순서(line) : (103) -> 98 -> 99 -> 100 -> (93) -> (94) -> (95) -> 100 -> (103)
