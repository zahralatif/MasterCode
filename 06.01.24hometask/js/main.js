var todoInput = document.querySelector(".todo_input");
var addBtn = document.querySelector(".add_btn");
var todoList = document.querySelector(".todos");
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", function (event) {
    var target = event.target;
    if (target.tagName === "BUTTON") {
        deleteTodo(target);
    }
});
todoInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        addTodo();
    }
});
function addTodo() {
    var inputValue = todoInput.value.trim();
    if (inputValue !== "") {
        var li = document.createElement("li");
        li.classList.add("todo_item");
        li.innerHTML = "\n      <span>".concat(inputValue, "</span>\n      <button class=\"delete_btn\">Delete</button>\n    ");
        todoList.appendChild(li);
    }
    todoInput.value = "";
}
function deleteTodo(deleteBtn) {
    var listItem = deleteBtn.closest("li");
    if (listItem) {
        listItem.remove();
    }
}
