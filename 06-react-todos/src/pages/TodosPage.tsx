import ListGroup from 'react-bootstrap/ListGroup'

const TodosPage = () => {
	return (
		<>
			<h1 className="mb-3">Todos</h1>

			<p>Here be form</p>

			<ListGroup className="todolist">
				<ListGroup.Item
					className={''}
				>
					This is my todo
				</ListGroup.Item>
			</ListGroup>
		</>
	)
}

export default TodosPage
