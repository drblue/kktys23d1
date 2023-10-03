/**
 * Todo Types
 */

import { Response } from "./response.types"

export type Todo = {
	id: number
	title: string
	completed: boolean
	// due_date: number
	// uid: number
	[key: string]: any
}

const fakedTodo: Todo = {
	id: 1337,
	title: "My fake todo",
	completed: false,
	project_manager: "Bob",
	client_id: 42,
}

// export type NewTodo = {
// 	title: string
// 	completed: boolean
// }
export type NewTodo = Omit<Todo, "id">
//              ^?

export type TodoIdTitle = Pick<Todo, "id" | "title">
//                   ^?

export type PartialTodo = Partial<Omit<Todo, "id">>
export type RequiredTodo = Required<PartialTodo>

// 🤯
export type TodosResponse = Response<Todo[]>
export type TodoResponse = Response<Todo>
