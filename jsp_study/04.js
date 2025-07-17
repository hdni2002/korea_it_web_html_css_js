// 배열
const arr1 = []; //빈 배열
const arr2 = new Array(); //빈 배열

// 새로운 요소 추가
//push => 배열의 끝에 요소를 추가
arr1.push(10);
arr1.push(20);
arr1.push(30);
arr1.push(40);
console.log(arr1);

arr2.push(10);
arr2.push(20);
arr2.push(30);
arr2.push(40);
console.log(arr2);

console.log(arr1 === arr2);

// 배열과 객체의 참조 비교 => 자바스크립트에서 객체(배열 포함)는 참조타입
// ===(일치 연산자)는 객체의 경우 메모리 주소(참조)가 같은지 비교
console.log(arr1 === arr2);
//arr1과 arr2는 내용이 같더라도 서로 다른 메모리 공간에 있는 별개의 객체이므로
// false가 출력된다.

const obj1 = { key1: "value1", key2: "value2" };
const obj2 = { key1: "value1", key2: "value2" };
console.log(obj1 === obj2); // obj1 과 obj2도 내용이 같더라도 별개의 객체

//JSON (javascript Object Notation)
//자바스크립트 객체/배열과 JSON 문자열 간의 반환
//JSON.stringify() => 자바스크립트 객체 또는 배열을 JSON형식의 문자열로 반환
//JSON.parse() => JSON문자열을 자바스크립트 객체 또는 배열을 반환

const json1 = JSON.stringify(arr1);
const json2 = JSON.stringify(arr2);
console.log(json1);
console.log(typeof json2);
console.log(json1 === json2); //JSON 문자열은 값이 같으면 동일하다고 판단

const json3 = JSON.stringify(obj1);
const json4 = JSON.stringify(obj2);
console.log(json3);
console.log(json4);
console.log(json3 === json4);

// 배열의 다양한 기본 내장 함수
const names = ["허일녕", "허이녕", "허삼녕"];
names.push("허일녕");
console.log(names);

//const가 재할당을 금지하는 것이지,
//참조하는 객체(배열)의 내용 변경까지 막는것은 아니다 .

// 요소 제거 : pop() => 배열의 마지막 요소를 제거하고, 제거된 요소를 반환
console.log(names.pop());

//요소 수정/삽입/제거: splice(삽입될 인덱스, 제거할 개수, 추가할 요소...)
names.splice(1, 0, "허오녕");
console.log(names);

// 요소 찾기 : find() => 주어진 테스트 함수를 만족하는 배열의 첫 번째 요소를 반환
const findfx = (n) => n === "허일녕";
const foundName = names.find(findfx);
console.log(foundName);

const students = [
  //객체로 이루어진 배열
  { name: "허일녕", age: 24 },
  { name: "허이녕", age: 25 },
  { name: "허삼녕", age: 24 },
  { name: "허사녕", age: 24 },
  { name: "허사녕", age: 25 },
];
console.log(students.find((s) => s.name === "허삼녕"));
// 값 존재 여부 : includes() - 배열에 특정 값이 포함되어있는지 boolean으로 반환
console.log(names.includes("허일녕"));
//names에 해당 값이 포함되어 있으면 true
//필터링 : filter() - 주어진 조건 함수를 통과하는 모든 요소로 새로운 배열을 만듭니다.
//원본 배열은 영향을 주지 않음
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.filter((n) => n % 2 === 0));
const even = numbers.filter((n) => n % 2 === 0);
console.log(students.filter((student) => student.age === 24));
// students.stream().filter(student -> student.getAge == 24).collect(Collector.toList())

//map() - 배열의 모든 요소에 대해 주어진 함수를 호출(적용)한 결과를 모아 새로운 배열을 반환
console.log(numbers.map((n) => n * 10));
console.log(students.map((student) => {
    if(student.age === 25){
        //나이가 25인 학생은 이름만 있는 새로운 객체를 반환
        return {
            name : student.name,
        };
    }
    return student;
})
);