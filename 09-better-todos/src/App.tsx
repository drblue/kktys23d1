import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import TodosPage from './pages/TodosPage'
import './assets/scss/App.scss'
import { useTheme } from './hooks/useTheme'

const App = () => {
	const { isDarkMode } = useTheme()

	return (
		<div id="App" className={isDarkMode ? "bg-dark text-white" : ""}>
			<Navigation />

			<Container className="py-3">
				<Routes>
					<Route path="/" element={<HomePage />} />

					<Route path="/todos">
						{/* /todos */}
						<Route path="" element={<TodosPage />} />
					</Route>

					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App
