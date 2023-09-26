import { getTodos as TodosAPI_getTodos, createTodo as TodosAPI_createTodos } from "./api";
import { Todo } from "./todo.types";
import "./assets/scss/app.scss";

const todosEl = document.querySelector<HTMLUListElement>("#todos")!;
const newTodoFormEl = document.querySelector<HTMLFormElement>("#new-todo-form")!;

// Local variable containing all the todos from the server
let todos: Todo[] = [];

// Get todos from API
const getTodos = async () => {
	// Fetch todos from server and update local copy
	todos = await TodosAPI_getTodos();

	// Render todos
	renderTodos();
};

// Render todos
const renderTodos = () => {
	todosEl.innerHTML = todos
		.map(
			(todo) =>
				`<li class="list-group-item ${todo.completed ? "completed" : ""}">
				${todo.title}
			</li>`
		)
		.join("");
};

// "Create a new Todo" form
newTodoFormEl.addEventListener("submit", async (e) => {
	e.preventDefault();

	const newTodoTitleEl = document.querySelector<HTMLInputElement>("#new-todo-title")!;

	// POST todo to API
	await TodosAPI_createTodos({
		title: newTodoTitleEl.value,
		completed: false,
	});

	// Get the todos from API and re-render the list
	await getTodos();
});

// Get the todos from API and render initial list of todos
getTodos();
