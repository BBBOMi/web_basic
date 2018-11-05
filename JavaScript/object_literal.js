/* js 객체의 활용 - 객체 리터럴이라는 표현식을 이용해 객체를 쉽게 만들 수 있다 */
var healthObj = {
  name : "달리기",
  lastTime : "PM 10:12",
  showHealth : function() {
    console.log(this.name +"님, 오늘은 " + this.lastTime + "에 운동을 하셨네요");
  }
}

healthObj.showHealth(); // "달리기님, 오늘은 PM 10:12에 운동을 하셨네요"

/* this - 객체 안에서의 this는 그 객체 자신을 가리킴 */
const obj = {
  // ES6에서는 객체에서 메소드를 사용할 때 'function' 키워드를 생략할 수 있음
  getName() {
    return this.name;
  },
  setName(name) {
    this.name = name;
  }
}

obj.setName("bomi");
const result = obj.getName(); // bomi

// js에서는 전역스크립트나 함수가 실행될 때 실행문맥(Execution context)이 생성됨
// 모든 context에는 참조하고 있는 객체가 존재, 현재 context가 참조하고 있는 객체를 알기 위해서 this를 사용할 수 있다
// 즉, 함수가 실행될 때 함수에서 가리키는 this 키워드를 출력해보면 context가 참조하고 있는 객체를 알 수 있다

// this가 달라지는 경우 - 비동기로 동작하는 이벤트 콜백
// setTimeout()내에서 기본으로 this 키워드는 window(또는 global) 객체로 설정
var healthObj = {
  name : "달리기",
  lastTime : "PM 10:12",
  showHealth : function() {
    setTimeout(function() {
      console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요");
    }, 1000);
  }
}

healthObj.showHealth(); // 님, 오늘은 undefined에 운동을 하셨네요

/* 해결법 : bind method - 새로운 함수를 반환하는 함수 */
// bind함수의 첫번쨰 인자로 this를 주어, 그 시점의 this를 기억하고 있는 새로운 (바인드 된)함수가 반환
var healthObj = {
  name : "달리기",
  lastTime : "PM 10:12",
  showHealth : function() {
    setTimeout(function() {
      console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요");
    }.bind(this), 1000);
  }
}

healthObj.showHealth(); // 달리기님, 오늘은 PM 10:12에 운동을 하셨네요
