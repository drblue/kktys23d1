/**
 * Service for communicating with the json-server backend
 */
import axios from 'axios'
import { Todo } from '../types/Todo.types.ts'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

// Create a new axios instance
const instance = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json"
	}
})

/**
 * Make a generic HTTP GET request.
 *
 * @param endpoint Endpoint to get
 * @returns
 */
const get = async <T>(endpoint: string) => {
	const response = await instance.get<T>(endpoint)
	return response.data
}

/**
 * Get all todos
 */
export const getTodos = () => {
	return get<Todo[]>("/todos")
}
