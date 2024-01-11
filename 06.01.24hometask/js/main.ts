const todoInput = document.querySelector(".todo_input") as HTMLInputElement;
const addBtn = document.querySelector(".add_btn") as HTMLButtonElement;
const todoList = document.querySelector(".todos") as HTMLUListElement;

addBtn.addEventListener("click", addTodo);

todoList.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  if (target.tagName === "BUTTON") {
    deleteTodo(target as HTMLButtonElement);
  }
});

todoInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    addTodo();
  }
});

function addTodo() {
  const inputValue = todoInput.value.trim();
  if (inputValue !== "") {
    const li = document.createElement("li");
    li.classList.add("todo_item");
    li.innerHTML = `
      <span>${inputValue}</span>
      <button class="delete_btn">Delete</button>
    `;
    todoList.appendChild(li);
  }

  todoInput.value = "";
}

function deleteTodo(deleteBtn: HTMLButtonElement) {
  const listItem = deleteBtn.closest("li");
  if (listItem) {
    listItem.remove();
  }
}
