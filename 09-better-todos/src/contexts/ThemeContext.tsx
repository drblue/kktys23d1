import { createContext, useState } from 'react'

// Type definition for the actual Context
type ThemeContextType = {
	isDarkMode: boolean
	toggleTheme: () => void
}

// Create the actual context (and set the context's initial/default value)
export const ThemeContext = createContext<ThemeContextType | null>(null)

// Type definition for the Provider's props
type ThemeContextProviderProps = {
	children: React.ReactNode
}

// This allows us to wrap <App /> (or some other component) and provide the
// theme to our children and grandchildren etc.
const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(true)

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode)
	}

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider
