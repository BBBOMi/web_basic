// #1. 숫자 타입으로만 구성된 요소를 뽑아 배열로 만들기
const widget = {
     "debug": "on",
     "window": {
         "title": "Sample Konfabulator Widget",
         "name": "main_window",
         "width": 500,
         "height": 500
     },
     "image": {
         "src": "Images/Sun.png",
         "name": "sun1",
         "hOffset": 250,
         "vOffset": 250,
         "alignment": "center"
     },
     "text": {
         "data": "Click Here",
         "size": 36,
         "style": "bold",
         "name": "text1",
         "hOffset": 250,
         "vOffset": 100,
         "alignment": "center",
         "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
     }
 }

// 풀이
var arr = [];
for(key in widget) {
  if(typeof widget[key] === 'object') {
    arr.push(widget[key]);
  }
}

var element = [];
for(var i=0; i<3; i++) {
  for(key in arr[i]) {
    if(typeof arr[i][key] === 'number') {
      element.push(key);
    }
  }
}

console.log(element); // ["width", "height", "hOffset", "vOffset", "size", "hOffset", "vOffset"]


// #2. type이 sk인, name으로 구성된 배열만 출력하기.
var tree = [{
 	"id": 1,
 	"name": "Yong",
 	"phone": "010-0000-0000",
 	"type": "sk",
 	"childnode": [{
 		"id": 11,
 		"name": "echo",
 		"phone": "010-0000-1111",
 		"type": "kt",
 		"childnode": [{
 				"id": 115,
 				"name": "hary",
 				"phone": "211-1111-0000",
 				"type": "sk",
 				"childnode": [{
 					"id": 1159,
 					"name": "pobi",
 					"phone": "010-444-000",
 					"type": "kt",
 					"childnode": [{
 							"id": 11592,
 							"name": "cherry",
 							"phone": "111-222-0000",
 							"type": "lg",
 							"childnode": []
 						},
 						{
 							"id": 11595,
 							"name": "solvin",
 							"phone": "010-000-3333",
 							"type": "sk",
							"childnode": []
 						}
 					]
 				}]
 			},
 			{
 				"id": 116,
 				"name": "kim",
 				"phone": "444-111-0200",
 				"type": "kt",
 				"childnode": [{
 					"id": 1168,
 					"name": "hani",
 					"phone": "010-222-0000",
 					"type": "sk",
 					"childnode": [{
 						"id": 11689,
 						"name": "ho",
 						"phone": "010-000-0000",
						"type": "kt",
 						"childnode": [{
 								"id": 116890,
 								"name": "wonsuk",
 								"phone": "010-000-0000",
 								"type": "kt",
 								"childnode": []
 							},
 							{
 								"id": 1168901,
 								"name": "chulsu",
 								"phone": "010-0000-0000",
 								"type": "sk",
 								"childnode": []
 							}
 						]
 					}]
 				}]
 			},
 			{
 				"id": 117,
 				"name": "hong",
 				"phone": "010-0000-0000",
 				"type": "lg",
 				"childnode": []
 			}
 		]
 	}]
}];

// 풀이
var a = [];
function find(arr) {
  for(key in arr) { // 인덱스 추출
    for(k in arr[key]) {
      if(k === 'type' && arr[key][k] === 'sk') { // 키 값이 'type'이고, 해당 값이 'sk'이면,
          a.push(arr[key].name);
          // console.log("test: a =", arr[key].name);
       } else if(k === 'childnode') {
         if(typeof arr[key][k] === 'object') {
            find(arr[key][k]);
          }
      }
    }
  }
}

find(tree);
console.log(a); // ["Yong", "hary", "solvin", "hani", "chulsu"]
