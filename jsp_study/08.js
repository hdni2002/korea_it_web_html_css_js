// REST 문법과 Spread 문법
const student = {
  name: "허일녕",
  age: "24",
  address: "부산 동래구",
  phone: "010-8447-5158",
};

const { name, address } = student;
console.log(name, address);
// Rest문법
// 나머지 속성들을 새로운 객체 또는 배열로 묶을 때 사용
const { age, phone, ...a } = student;
console.log(age, phone, a);

const numbers = [1, 2, 3, 4];
const [n1, n2, ...ns] = numbers;
console.log(n1, n2, ns);

// Spread 문법
// 기존 객체의 모든 속성을 새로운 객체 복사하거나,
// 새로운 속성을 추가할 때 사용
const newStudent = {
  ...student, //student 객체에 있던 모든 속성을 여기에 복사
  gender: "남", //gender 라는 새로운 속성 추가
};
console.log(newStudent);

const newNumbers = [...numbers, 5, 6];
console.log(newNumbers);

let names = [];

function addName(name) {
  names = [...names, name];
}

addName("허일녕");
addName("허이녕");
console.log(names);

let obj = {
  data1: "data1",
  data2: "data2",
};

function addProps(props) {
  obj = {
    ...obj,
    ...props,
  };
}

addProps({ data3: "data3", data4: "data4" });
console.log(obj);

// score 변수에 임의의 숫자를 할당
// 조건에 따라서 등급을 부여
// 90점 이상 A 80점 이상 B 70점 이상 c 나머지 f
const score = Math.floor(Math.random() * 101);
console.log(score);
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 80) {
  console.log("c");
} else {
  console.log("f");
}

// for문을 이용해서 1부터 20까지 숫자중 짝수만출력
// const num = Math.floor(Math.random() * 101);
// Math.random()은 0 이상 1 미만의 실수를 반환
// 예: 0.0 ~ 0.999999...이걸 101로 곱하면: 0 ~ 100.999...
//거기에 Math.floor()를 쓰면: 0 ~ 100 사이 정수가 나옵니다.

for (let i = 1; i < 21; i++) {
  if (i % 2 == 0) {
    console.log(i + "은 짝수입니다.");
  }
}

// 1. title, author, publisherYear 속성을 포함하는 book 객체 생성
// 해리포터, j.k 롤링, 1997
// 2. book 객체의 title과 author 속성 값을 출력 ( 점 표기법 ,대괄호 표기법)
// 3 book 객체에 getAge()라는 메소드 추가
// 현재 연도 (new Date().getFullYear()) 에서 publisherYear를 뺀 값을 리턴
// 4. getAge()호출해서 출력
// 5. book 객체에 새로운 속성 genre를 추가하고 값을 할당 ("판타지")
// 6. book 객체의 publisherYear를 2000으로 수정

const book = {
  title: "해리포터",
  author: "j.k 롤링",
  publisherYear: "1997",
};
console.log(book.title, book.author);
console.log(book["title"]);
console.log(book["author"]);
book.getAge = function () {
  return new Date().getFullYear() - this.publisherYear;
};
//객체에 함수를 추가하는 방법
// student.printName = () => console.log("이름: ", student.name);
// const loginButton = {
//   text: "로그인",
//   value: "text",
//   onclick: () => {
//     console.log(loginButton.text);
//   },
// };

// book.getAge = () => {
//   const currentYear = new Date().getFullYear;
//   return currentYear - publisherYear;
// };
console.log(book.getAge());
book.genre = "판타지";
console.log(book.genre);
book.publisherYear = 2000;

const products = [
  { id: 1, name: "노트북", price: 1200000, category: "전자제품" },
  { id: 2, name: "티셔츠", price: 25000, category: "의류" },
  { id: 3, name: "모니터", price: 300000, category: "전자제품" },
  { id: 4, name: "청바지", price: 50000, category: "의류" },
  { id: 5, name: "마우스", price: 15000, category: "전자제품" },
];
const expensiveProducts = products.filter((product) => product.price >= 50000);
console.log(expensiveProducts);
const productNamesAndPrices = products.map((product) => ({
  name: product.name,
  price: product.price,
}));
console.log(productNamesAndPrices);
//1. 50000원 이상인 제품만 필터링해서 expensiveProducts 배열에 넣고 출력
//2. products배열에서 각 제품의 이름과 가격만 포함하는 productNamesAndPrices배열 만들기
// [{name: "노트북", price: 1200000}, {}...]
//3. products배열에서 category가 전자제품인 제품만 선택해서 각 제품의 이름과 가격을
//10%할인한 discountProducts배열을 만드세요

// console.log(products.filter((n) => n % 2 === 0));

//   console.log(students.find((s) => s.name === "허삼녕"));
//   // 값 존재 여부 : includes() - 배열에 특정 값이 포함되어있는지 boolean으로 반환
//   console.log(names.includes("허일녕"));
//names에 해당 값이 포함되어 있으면 true
//필터링 : filter() - 주어진 조건 함수를 통과하는 모든 요소로 새로운 배열을 만듭니다.
//원본 배열은 영향을 주지 않음
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(numbers.filter((n) => n % 2 === 0));
//   const even = numbers.filter((n) => n % 2 === 0);
//   console.log(students.filter((student) => student.age === 24));
//   // students.stream().filter(student -> student.getAge == 24).collect(Collector.toList())

//   //map() - 배열의 모든 요소에 대해 주어진 함수를 호출(적용)한 결과를 모아 새로운 배열을 반환
//   console.log(numbers.map((n) => n * 10));
//   console.log(
//     students.map((student) => {
//       if (student.age === 25) {
//         //나이가 25인 학생은 이름만 있는 새로운 객체를 반환
//         return {
//           name: student.name,
//         };
//       }
//       return student;
//     })
//   );
