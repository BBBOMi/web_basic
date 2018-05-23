/* DOM : Document Object Model
      - 브라우저에서 HTML코드를 DOM이라는 객체형태의 모델로 저장
      - DOM에서 모든 요소, 어트리뷰트, 텍스트는 하나의 객체, Document 객체의 자식
      - 객체의 틀로 구조화되어 있기 때문에 DOM Tree라고 함 -> HTML elements는 tree형태로 저장
*/

/* 자주 쓰이는 DOM API */
/* getElementId() : ID정보를 통해서 찾을 수 있다.
                  : id 어트리뷰트 값으로 요소 노드를 한 개 선택. 복수개일 경우, 첫번째 요소만 반환
*/
document.getElementId('one'); // return: id값으로 'one'을 가지고 있는 요소
document.getElementId('one').display = "none"; // 'one'을 id값으로 갖고 있는 요소의 display속성을 none으로 함.

/* Element.querySelector() : Selector문법을 활용해 DOM에 접근할 수 있음
                           : DOM을 찾는데 특히 유용
                           : selector에 해당하는 요소 노드 한 개 반환. 복수개일 경우, 첫번째 요소만 반환
*/
document.querySelector("#a"); // id값으로 a를 가진 요소를 찾아줌
document.querySelector(".b"); // class값으로 b를 가진 요소를 찾아줌
document.querySelector("div"); // div태그를 가진 요소를 찾아줌

/* Elecment.querySelectorAll() : seletor에 해당하는 요소 노드를 Nodelist형태로 반환 */
document.querySelectorAll("div"); // div태그를 가진 요소를 모두 반환
 
