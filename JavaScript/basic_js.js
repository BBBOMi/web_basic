/* 자바스크립트 버전
  - 자바 스크립트 버전은 ECMAScript(줄여서 ES)의 버전에 따라서 결정되고,
    이를 자바스크립트 실행 엔진이 반영
  - 2018을 중심으로 ES6를 지원하는 브라우저가 많아 몇 년간 ES6 문법이 표준으로 쓰임.
  - Es6는 ES5문법을 포함 -> 하위호환성 문제가 없음
  - feature별로 지원하지 않는 브라우저가 있을 수 있어 주의
*/

/* 변수 선언 방법 - var, let, const (명시적인 타입 없음, 어떠 자료형의 값도 ok)
      var : 변수를 선언, 동시에 초기화 가능(default value: undefined)
      let : 블록 범위(scope) 지역 변수를 선언(default value: undefined)
      const : 읽기 전용 상수를 선언(값 재할당 불가)

    - 지역 변수와 전역 변수의 이름이 같을 경우 지역 변수의 우선순위가 높다
    - var 키워드 없이 변수를 선언하면 자동으로 전역 변수가 된다
    - var는 변수명이 중복으로 페이지에서 선언되어도 정상작동
    - let, const는 중복 변수명이 존재할 경우 오류
    - let은 선언 이후 값할당 자유로움
    - const는 java의 final 속성과 유사, 선언과 동시에 값할당을 해야함
*/
var a = 2;
var a = "aaa";
var a = 'aaa';
var a = true;
var a = [];
var a = {};
var a = undefined;

/* 연산자의 종류 : 수학연산자(+, -, *, /, %), 논리연산자, 관계연산자, 삼항연산자 등 */
/* or 연산자 사용의 예 */
const name = "bomi";
const result = name || "default name";
consol.log(result); // bomi
var name = "";
var result = name || "default name";
consol.log(result); // default name

/* 삼항 연산자 사용의 예 */
const data = 11;
const result = (data > 10) ? "ok" : "fail";
consol.log(result); // ok

/* 비교 연산자 사용의 예 */
0 == false;
"" == false;
null == false;
0 == "0";
null == undefined; // 모든 결과가 true, 암묵적으로 타입을 바꿔서 비교하려는 성질이 있음
                  // 그래서 비교 연산자는 ===를 사용한다(===는 타입까지 비교함)

0 === false;
"" === false;
null === false;
0 === "0";
null === undefined; // 모든 결과 false

/* 자바스크립트 타입 - undefined, null, bolean, number, string,
                          object, function, array, Date, RegExp
                   - 타입은 선언할 때가 아니고 실행타임에 결정(실행될 때 그 타입이 결정됨)
                   - 타입을 체크하는 또렷한 방법은 없으나, toString.call 함수를 이용해 결과를 매칭할 수 있다.
                   - 기본 타입은 'typeof' 키워드를 사용해서 체크
                   - 배열은 타입을 체크하는 isArray함수가 표준으로 생김
*/
/* typeof와 toString.call 함수 사용의 예 */
// typeof는 구체적인 인스턴스 타입을 알려주지 않음
typeof null === 'object' // true
typeof [] === 'object' // true
typeof null === 'object null' // false

//toString.call함수는 구체적인 인스턴스 타입을 알 수 있다.
Object.prototype.toString.call(new Date) === "[object]" // false
Object.prototype.toString.call(new Date) === "[object Date]" // true
