import ListGroup from 'react-bootstrap/ListGroup'
import { Todo } from '../types/Todo.types'

type TodoListItemProps = {
	todo: Todo
}

const TodoListItem = ({ todo }: TodoListItemProps) => {
	return (
		<ListGroup.Item
			className={''}
		>
			{todo.title}
		</ListGroup.Item>
	)
}

export default TodoListItem
