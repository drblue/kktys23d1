import {
	getTodos as TodosAPI_getTodos,
	createTodo as TodosAPI_createTodos,
	updateTodo as TodosAPI_updateTodo,
	deleteTodo as TodosAPI_deleteTodo,
} from "./api";
import { Todo } from "./todo.types";
import "./assets/scss/app.scss";
import { AxiosError } from "axios";

const todosEl = document.querySelector<HTMLUListElement>("#todos")!;
const newTodoFormEl = document.querySelector<HTMLFormElement>("#new-todo-form")!;

// Local variable containing all the todos from the server
let todos: Todo[] = [];

// Get todos from API
const getTodos = async () => {
	// Fetch todos from server and update local copy
	try {
		todos = await TodosAPI_getTodos();

		// Render todos
		renderTodos();
	} catch (err) {
		if (err instanceof AxiosError) {
			alert("Something wrong with the network. Please try again later.")

		} else if (err instanceof Error) {
			alert("Something unexpected happened. Isn't it exciting?")

		} else {
			alert("This should never happen.")
		}
	}
};

// Render todos
const renderTodos = () => {
	todosEl.innerHTML = todos
		.map((todo) =>
			`<li class="list-group-item ${todo.completed ? "completed" : ""}" data-todo-id="${todo.id}">
				<span class="todo-title">${todo.title}</span>
				<div class="btn-group">
					<button class="btn btn-outline-primary btn-sm action-toggle">Toggle</button>
					<button class="btn btn-outline-warning btn-sm action-edit">Edit</button>
					<button class="btn btn-outline-danger btn-sm action-delete">Delete</button>
				</div>
			</li>`
		)
		.join("");
};

// Listen for toggle of todo
todosEl.addEventListener('click', async (e) => {
	// Find todo id
	const target = e.target as HTMLElement

	if (target.classList.contains("action-toggle")) {
		const todoId = Number(target.parentElement?.parentElement?.dataset.todoId!)

		// find the todo object
		const todo = todos.find(todo => todo.id === todoId)
		if (!todo) {
			return
		}

		// Update todo
		await TodosAPI_updateTodo(todoId, {
			completed: !todo.completed
		})

		// Get updated list
		getTodos()

	} else if (target.classList.contains("action-edit")) {
		const todoId = Number(target.parentElement?.parentElement?.dataset.todoId!)

		// find the todo object
		const todo = todos.find(todo => todo.id === todoId)
		if (!todo) {
			return
		}

		// Ask user about new title
		const title = prompt("What's the new title?", todo.title)
		if (!title) {
			return
		}

		// Update todo
		await TodosAPI_updateTodo(todoId, {
			title,
		})

		// Get updated list
		getTodos()

	} else if (target.classList.contains("action-delete")) {
		const todoId = Number(target.parentElement?.parentElement?.dataset.todoId!)

		// find the todo object
		const todo = todos.find(todo => todo.id === todoId)
		if (!todo) {
			return
		}

		// Ask user if sure
		const proceed = confirm("U SURE BRO?!")
		if (!proceed) {
			return
		}

		// Delete todo
		await TodosAPI_deleteTodo(todoId)

		// Get updated list
		getTodos()
	}
})

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
