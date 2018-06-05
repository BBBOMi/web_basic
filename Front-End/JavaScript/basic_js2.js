/* 자바스크립트의 조건문 - java의 if-else문과 동일
              - 조건이 참이면 statement1이 실행, 그렇지 않으면 statement2 실행

              - false로 취급하는 값 : false, undefined, null, 0, NaN, 빈 문자열
              * var b = Boolean(false) -> true, Boolean객체의 참과 거짓값으로 boolean값 true,false 혼동 주의
                그 외의 값은 모두 true.
*/
if(condition) {
  statement1;
} else {
  statement2;
}

/* 분기 - 자바의 switch문과 동일
        - switch문은 프로그램이 표현식을 평가하고 값을 조건과 비교함.
        - 값이 일치한다면 프로그램은 각 조건의 하위 문장을 실행. break문을 만났을 때 종료.
        - 일치하는 조건을 찾지 못했다면, default절로, default절도 못찾게 된다면 switch문 종료
*/
switch (expression) {
  case label_1:
    statement1;
    [break;]
  case label_2:
    statement2;
    [break;]
  default:
    statement_default;
    [break;]
}

/* 반복문 - for, while
         - 배열의 경우 forEach, for-of를 통한 탐색도 자주 사용(for-in은 객체 탐색시 사용)
         - 자바스크립트의 구현방법에 따라(성능문제로 인한 for, while의 선택 등) 성능차이는 그리 크지 않기 때문에 일반적으로는 코드의 가독성에 우선
*/
function howMany(selectObject) {
  var numberSelected = 0;
  var length = selectObject.options.length; // 매개변수의 길이
                                            // 변수가 아닌 그대로 반복문에 사용하게 되면,
                                            // 조건식 검사때, 계속 계산을 해야하므로 비효율적

  for(var i=0; i<length; i++) {
    if(selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

/* 문자열 처리 - 자바스크립트의 문자와 문자열은 같은 타입으로 모두 문자열임 */
typeof "abc"; // string
typeof "a"; // string
typeof 'a'; // single quote를 사용해도 string

/* 문자열 주 메소드 (이 밖에도 다양한 메소드가 있다) */
"ab:cd".split(":") // ["ab", "cd"]
"ab:cd".split("") // ["a", "b", ":", "c". "d"]
"ab:cd".replace(":", "$"); // "ab$cd"
" abcde  ".trim(); // "abcde"
