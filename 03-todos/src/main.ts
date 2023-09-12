import "./assets/scss/app.scss"

// const todosEl = document.querySelector("#todos") as HTMLUListElement
const todosEl = document.querySelector<HTMLUListElement>("#todos")!
//     ^?
const newTodoFormEl = document.querySelector<HTMLFormElement>("#new-todo-form")!
//     ^?

type Todo = {
	title: string
	completed: boolean
}

const todos: Todo[] = [
	{ title: "Learn about Everyday Types", completed: true },
	{ title: "Learn about DOM Manipulation", completed: true },
	{ title: "Learn about typing fetch/axios responses", completed: false },
]

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
newTodoFormEl.addEventListener('submit', (e) => {
	e.preventDefault()

	const newTodoTitleEl = document.querySelector<HTMLInputElement>("#new-todo-title")!
//              ^?

	// const newTodo = {
	// 	title: newTodoTitleEl.value,
	// 	completed: false,
	// }
	// todos.push(newTodo)
	todos.push({
		title: newTodoTitleEl.value,
		completed: false,
	})

	// Re-render todos
	renderTodos()
})

// Render initial list of todos
renderTodos()
