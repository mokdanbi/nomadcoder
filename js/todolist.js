const todoForm = document.querySelector(".todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todoList");

const todoArray = [];

function openTodo() {
  localStorage.setItem("todos",todoArray);
}

function deleteTodo(e) {
  const delLi = e.target.parentElement;
  delLi.remove();
}

function savedTodo(newTodo) {
  const list = document.createElement("li");
  const todoText = document.createElement("span");
  todoText.innerText = newTodo;

  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteTodo);

  list.appendChild(todoText);
  list.appendChild(delBtn);
  todoList.appendChild(list);
}

function todoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  todoArray.push(newTodo);
  // savedTodo전에 배열안에 값을 저장한다
  savedTodo(newTodo);
  openTodo();
}

todoForm.addEventListener("submit", todoSubmit);