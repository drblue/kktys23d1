import { getTodos, createTodo } from './api'
import { Todo } from './todo.types'
import "./assets/scss/app.scss"

const todosEl = document.querySelector<HTMLUListElement>("#todos")!
const newTodoFormEl = document.querySelector<HTMLFormElement>("#new-todo-form")!

// Get todos from API
let todos: Todo[] = await getTodos()

// Render todos
const renderTodos = () => {
	todosEl.innerHTML = todos
		.map(todo =>
			`<li class="list-group-item ${todo.completed ? 'completed' : ''}">
				${todo.title}
			</li>`
		)
		.join('')
}

// "Create a new Todo" form
newTodoFormEl.addEventListener('submit', async (e) => {
	e.preventDefault()

	const newTodoTitleEl = document.querySelector<HTMLInputElement>("#new-todo-title")!

	// POST todo to API
	await createTodo({
		title: newTodoTitleEl.value,
		completed: false,
	})

	// Get the todos from API (including the newly created todo)
	todos = await getTodos()

	// Re-render todos
	renderTodos()
})

// Render initial list of todos
renderTodos()
