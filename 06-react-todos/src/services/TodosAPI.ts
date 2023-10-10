/**
 * Service for communicating with the json-server backend
 */
import axios from 'axios'
import { Todo } from '../types/Todo.types.ts'

const BASE_URL = 'http://localhost:3000'

/**
 * Get all todos
 */
export const getTodos = async () => {
	const res = await axios.get<Todo[]>(`${BASE_URL}/todos`)
	return res.data
}
