import "./assets/scss/app.scss"

const todosEl = document.querySelector<HTMLUListElement>("#todos")!
const newTodoFormEl = document.querySelector<HTMLFormElement>("#new-todo-form")!

type Todo = {
	title: string
	completed: boolean
}

// Get JSON of Todos from LocalStorage
const json = localStorage.getItem('todos') ?? '[]'

// Parse JSON into an array of Todo objects
const todos: Todo[] = JSON.parse(json)

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

// Save todos to localStorage
const saveTodos = () => {
	// Convert todos-array to JSON
	const json = JSON.stringify(todos)

	// Save JSON to localStorage
	localStorage.setItem('todos', json)
}

// "Create a new Todo" form
newTodoFormEl.addEventListener('submit', (e) => {
	e.preventDefault()

	const newTodoTitleEl = document.querySelector<HTMLInputElement>("#new-todo-title")!

	todos.push({
		title: newTodoTitleEl.value,
		completed: false,
	})

	// Save todos to localStorage
	saveTodos()

	// Re-render todos
	renderTodos()
})

// Render initial list of todos
renderTodos()
