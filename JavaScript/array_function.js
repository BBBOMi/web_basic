var data = [{title : "hello", content : "간지철철", price : 12000},
            {title : "crong", content : "괜춘한 상품", price : 5500},
            {title : "codesquade", content : "쩌는 상품", price : 1200}];

/* for문과 forEach문 */
// forEach에서는 i++이나 length를 판단하는 코드가 필요 없으므로 실수를 줄일 수 있고,
// 가독성도 좋음. 특정 인덱스에 처리하는 작업이 아니라면 forEach문 사용
for(var i=0; i<data.length; i++) {
  console.log(data[i].title, data[i].price);
}

data.forEach(function(v) {
  console.log(v.title, v.price);
});

/* map - 합수에서 정의한 방법대로 모든 원소를 가공해서 새로운 배열을 반환 */
var filteredData = data.map(function(v) {
  return v.price * 1.1; // 10% 인상한 가격의 배열 반환
});

/* filter - 함수에서 정의한 조건에 맞는 원소만 추려서 새로운 배열 반환 */
var filteredData = data.filter(function(v) {
  return v.price > 5000; // 5000원 이상만 추출
})

// filter, map을 같이 사용한 예 - 가격이 5000원 이상의 데이터만 가공해서 새로운 배열로 반환
var filterdData = data.filter(function(v) {
  return v.price > 5000;
}).map(function(v) {
  v.price = ("" + v.price).replace(/^(\d+)(\d{3})$/, "$1,$2원");
  return v;
});

// 위의 예제는 원본 데이터를 변경, 원본 데이터를 유지하기 위해 이렇게 하자
var filteredData = data.filter(function(v) {
  return v.price > 5000;
}).map(function(v) {
  var obj = {title : v.title, content : v.content};
  obj.price = (""+v.price).replace(/^(\d+)(\d{3})$/, "$1,$2원");
  return obj;
});

/* reduce - 누산기와 배열의 각 요소에 대해 하나의 단일 값으로 줄임 */
var filteredData = data.reduce(function(acc, v) {
  return acc + v.price; // data의 가격을 모두 합한 값
}, 0);
