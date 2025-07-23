const todoInput = document.querySelector("#todoInput");
const addTodoBtn = document.querySelector("#addTodoBtn");
const todoList = document.querySelector("#todoList");

let todos = [];
let nextTodoId = 1;

function addTodo() {
  const todoText = todoInput.value.trim(); //입력된 텍스트 가져와서 양쪽 공백제거 trim양쪽 공백제거
  if (todoText === "") {
    alert("할 일을 입력해주세요!");
    return;
  }

  const newTodo = {
    id: nextTodoId++,
    text: todoText,
    isEditing: false, //수정 중인지 여부를 나타내는 플래그
  };

  todos.push(newTodo);
  console.log(todos);
  todoInput.value = "";
  todoInput.focus();
}

addTodoBtn.addEventListener("click", addTodo); //만약 addtodo() 이렇게되면 즉시 함수가 호출되어서 바로 추가버튼 클릭됨이나와버림

todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodoBtn.click();
  }
});
