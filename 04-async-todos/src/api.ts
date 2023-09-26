/**
 * All communication with the backend (`json-server`)
 */
import axios from 'axios'
import { NewTodo, PartialTodo, Todo } from './todo.types'

export const getTodos = async () => {
	const response = await axios.get<Todo[]>("http://localhost:3000/todos")
	return response.data
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
