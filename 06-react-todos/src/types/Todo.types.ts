export type Todo = {
	id: number
	title: string
	completed: boolean
}
export type PartialTodo = Partial<Todo>
export type NewTodo = Omit<Todo, "id">
