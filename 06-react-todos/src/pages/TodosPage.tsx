import { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'
import { getTodos as TodosAPI_getTodos } from '../services/TodosAPI'
import { Todo } from '../types/Todo.types'

const TodosPage = () => {
	const [todos, setTodos] = useState<Todo[] | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	// Fetch todos when App is being mounted
	useEffect(() => {
		const getTodos = async () => {
			const data = await TodosAPI_getTodos()
			setTodos(data)
			setIsLoading(false)
		}
		getTodos()
	}, [])

	return (
		<>
			<h1 className="mb-3">Todos</h1>

			<p>Here be form</p>

			{isLoading && <Spinner />}

			{todos && todos.length > 0 && (
				<ListGroup className="todolist">
					{todos.map(todo => (
						<ListGroup.Item
							className={''}
							key={todo.id}
						>
							{todo.title}
						</ListGroup.Item>
					))}
				</ListGroup>
			)}
		</>
	)
}

export default TodosPage
