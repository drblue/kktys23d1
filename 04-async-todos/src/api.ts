/**
 * All communication with the backend (`json-server`)
 */
import axios from 'axios'
import { NewTodo, PartialTodo, Todo } from './todo.types'

/**
 * Make a generic HTTP GET request.
 *
 * @param endpoint Endpoint to get
 * @returns
 */
const get = async <T>(endpoint: string) => {
	const response = await axios.get<T>(endpoint)
	return response.data
}

export const getTodos = () => {
	return get<Todo[]>("http://localhost:3000/todos")
}
export const getTodo = (id: number) => {
	return get<Todo>("http://localhost:3000/todos/" + id)
}

export const createTodo = async (newTodo: NewTodo) => {
	const response = await axios.post<Todo>("http://localhost:3000/todos", newTodo)
	return response.data
}

export const updateTodo = async (id: number, data: PartialTodo) => {
	const response = await axios.patch<Todo>(`http://localhost:3000/todos/${id}`, data)
	return response.data
}

export const deleteTodo = async (id: number) => {
	const response = await axios.delete(`http://localhost:3000/todos/${id}`)
	return response.data
}
