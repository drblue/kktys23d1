/**
 * All communication with the backend (`json-server`)
 */
import axios from 'axios'
import { Todo } from './todo.types'

export const getTodos = async () => {
	const response = await axios.get<Todo[]>("http://localhost:3000/todos")
	return response.data
}

export const createTodo = async (newTodo: Todo) => {
	const response = await axios.post<Todo>("http://localhost:3000/todos", newTodo)
	return response.data
}
