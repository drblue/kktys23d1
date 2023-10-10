import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { NewTodo } from '../types/Todo.types'

interface AddTodoFormProps {
	onAddTodo: (todo: NewTodo) => void
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
	const [newTodoTitle, setNewTodoTitle] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		// Stop form from submitting
		e.preventDefault()

		// Create a new todo
		const newTodo: NewTodo = {
			title: newTodoTitle,
			completed: false,
		}

		// Pass it to the parent
		onAddTodo(newTodo)

		// Clear input field
		setNewTodoTitle("")
	}

	return (
		<Form onSubmit={handleSubmit} className="mb-4">
			<InputGroup className="mb-3">
				<Form.Control
					placeholder="What you got to do?"
					aria-label="Title of the new Todo"
					aria-describedby="btnCreate"
					onChange={e => setNewTodoTitle(e.target.value)}
					value={newTodoTitle}
				/>

				<Button
					disabled={!newTodoTitle}
					type="submit"
					variant="success"
					id="btnCreate"
				>
					Create
				</Button>
			</InputGroup>
		</Form>
	)
}

export default AddTodoForm
