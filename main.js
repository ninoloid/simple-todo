let todos = [];

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (text) {
    addTodo(text);
    todoInput.value = "";
  }
});

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = `todo-item ${todo.done ? "done" : ""}`;

    li.innerHTML = `
      <span class='todo-text'>${todo.text}</span>
      <button class='toggle-btn' onclick='toggleTodo(${todo.id})'>
          ${todo.done ? "Undo" : "Done"}
      </button>
      <button class='delete-btn' onclick='deleteTodo(${
        todo.id
      })'>Delete</button>
    `;

    todoList.appendChild(li);
  });
}

renderTodos();

function addTodo(text) {
  todos.push({
    id: Date.now(),
    text,
    done: false,
  });
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}

function toggleTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
  renderTodos();
}
