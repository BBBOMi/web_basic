/* 자바스크립트의 배열 선언 */
// new Array() 문으로 선언할 수도 있지만, 보통은 간단히 '[]' 를 사용.
var a = [];
// 배열 안에는 모든 타입이 다 들어갈 수 있다. 함수, 배열, 객체도 가능.
var a = [1, 2, 3, "hello", null, true, []];

// length 속성이 있어 배열의 길이를 쉽게 알 수 있음.
var a = [4];
console.log(a.length); // 1;

// 배열의 원소 추가는 index번호와 함께 추가 가능.
// push메소드를 통해서 뒤에 순차적으로 추가 가능.
var a = [4];
a[1000] = 3;
a.push(5);
console.log(a.length); // 1002
console.log(a[500]); // undefined
console.log(a); // [4, empty * 999, 3, 5]

/* 유용한 메소드 */
// 배열은 순서가 있고, push와 같은 메소드를 제공하고 있어 추가/삭제/변경이 용이

// 베열의 원소에 특정 값이 들어있는지 확인
[1, 2, 3, 4].indexOf(3); // 2

// 배열의 문자열로 합칠 수 있다.
[1, 2, 3, 4].join(); // "1,2,3,4"

// 배열을 합칠 수 있다.
[1, 2, 3, 4].concat(2, 3); // [1, 2, 3, 4, 2, 3]

// concat()은 원본 배열은 그대로 유지. 합쳐진 새로운 배열을 반환
// origin과 changed는 같은 배열 원소를 가지고 있지만, reference가 다름 -> 결과값이 false
var origin  = [1, 2, 3, 4];
var changed = origin.concat(); // [1, 2, 3, 4]
console.log(origin === changed) // false

// 배열을 특정 인덱스 부분을 기준으로 자를 수 있다.(end 인덱스 불포함)
// 원본 배열은 그대로 유지. 새로운 배열 반환
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
animals.slice(2); // ["camel", "duck", "elephant"]
animals.slice(2, 4); // ["camel", "duck"]

/* 배열 탐색 */
// 배열의 순회는 for문을 사용하거나, forEach()와 같은 메소드를 통해서 가능

// for문은 일반적인 for문과 같음
// forEach()를 사용하면 조건식, 증감문 등이 필요 없음. -> for문 사용 시 생길 수 있는 실수를 줄여준다.
// forEach()는 가독성이 좋음.
// forEach()는 함수를 인자로 갖는다.
["apple", "tomato"].forEach(function(value) {
  console.log(value)
}); // 한줄씩 apple, tomato 출력

// map() -> 새로운 배열을 반환, 원본 배열 유지
var newArr = ["apple", "tomato"].map(function(value, index) {
  return index + "번째 과일은 " + value + "입니다";
});

console.log(newArr); // ["0번째 과일은 apple입니다", "1번째 과일은 tomato입니다"]

// filter() -> 새로운 배열을 반환, 원본 배열 유지
var arr = [12, 5, 8, 130, 44];
var filtered = arr.filter(function(value) {
  return value >= 10;
});

console.log(filtered); // [12, 130, 44]
