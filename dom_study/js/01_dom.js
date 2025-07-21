const title1 = document.getElementById("title");
// 태그의 id를 통해 선택
console.log(title1);
console.log({ title1 });

const titles = document.getElementsByClassName("title");
//태그의 class를 통해서 선택
console.log(titles);

const h3 = document.getElementsByTagName("h3");
//태그명을 통해서 선택
console.log(h3);

const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
console.log(d1);
console.log(d2);

const title2 = document.querySelector("#title"); //id로 선택
console.log(title2);
console.log(title2.innerHTML);

title2.innerHTML = "다른 제목";

const titles2 = document.querySelectorAll(".title"); //class 다중 선택
console.log(titles2);

const h3s = document.querySelectorAll("h3");
console.log(h3s);

const d11 = document.querySelector("#d1");
const d22 = d11.querySelector("#d2");

const d222 = document.querySelector("#d1 > #d2");
d222.innerHTML = "<p>innerHtml</p>";
d222.innerText = "<p>innerText</p>";

const students = [
  { name: "허일녕", age: 24, address: "부산 동래구" },
  { name: "김주엽", age: 23, address: "런던" },
  { name: "김수엽", age: 22, address: "런던" },
];
const studentTableTbody = document.querySelector(".student-table > tbody");

const stduentTrs = students.map((s, index) => {
  return `<tr>
    <td>${index + 1}</td>
    <td>${s.name}</td>
    <td>${s.age}</td>
    <td>${s.address}</td>
    </tr>`;
});

studentTableTbody.innerHTML = stduentTrs.join("");

const tdlist = document.querySelectorAll("td");
tdlist.forEach((td) => {
  td.style = "border: 1px solid black";
});

const studentTable = document.querySelector(".student-table");
studentTable.id = "table-student";
studentTable.classList.add("student"); //클래스리스트로 클래스를 가져옴여러개 다 가능
studentTable.classList.remove("student-table");
