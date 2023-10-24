import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink, Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

const Navigation = () => {
	const { isDarkMode, toggleTheme } = useTheme()

	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">🕵🏻‍♂️ Better Todos</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/todos">Todos</Nav.Link>
					</Nav>
				</Navbar.Collapse>

				<Button variant="outline-secondary" onClick={toggleTheme}>
					{isDarkMode ? '☀️' : '🌙'}
				</Button>
			</Container>
		</Navbar>
	)
}

export default Navigation
