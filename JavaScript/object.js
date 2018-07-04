/* 자바스크립트 객체 */
// key value로 이루어진 dictionary 자료구조
// JavaScript로 데이터를 표현하기 위해서는 Array, Object를 사용.
// Object형태는 {}로 그 자료를 표현하며, 서버와 클라이언트 간에 데이터를 교환할 때
// Object포맷과 비슷한 방법으로 데이터를 보낸다. -> JSON

/* 자바스크립트 객체는 내부적으로는 순서를 가지고 있지만 겉으로 드러나는 index와 다름
    -> 객체를 순서기반으로 사용하면 안된다.
  순서가 필요한 것은 배열을 사용하는 것이 좋고, 객체는 어떠한 key키값을 기반으로 동작하는 자료구조에 더 어울림*/

/* 객체선언 */
var obj = {name: "bomi", age: 23};

/* 객체의 추가/삭제 */
const myFriend = {key: "value"};

// value 출력
console.log(myFriend["key"]);
console.log(myFriend.key);

// 정보 추가 - 추가하는 방법은 dot notation을 더 많이 사용.
myFriend["age"] = 34;
myFriend.age = 34;

/* 객체의 탐색 - for-in 구문이 대표적*/
var obj = {"name" : "bomi", age: 23, data: [1, 2, 3, 4]};

for(value in obj) {
  console.log(obj[value]);
} // 한줄 씩 bomi 23 [1, 2, 3, 4] 출력

// Object.keys()를 이용한 후 forEach로 탐색하는 방법도 많이 쓰임
var arr = Object.keys(obj);
arr.forEach(function(key) {
  console.log(key); // obj의 키 값을 출력
});
