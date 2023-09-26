/**
 * Todo Types
 */

import { Response } from "./response.types"

export type Todo = {
	id: number
	title: string
	completed: boolean
}

// export type NewTodo = {
// 	title: string
// 	completed: boolean
// }
export type NewTodo = Omit<Todo, "id">
//              ^?

export type PartialTodo = Partial<NewTodo>

// 🤯
export type TodosResponse = Response<Todo[]>
export type TodoResponse = Response<Todo>
