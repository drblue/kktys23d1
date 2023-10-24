import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

// Hook for using the ThemeContext (the correct, safe way)
export const useTheme = () => {
	const themeContext = useContext(ThemeContext)

	if (!themeContext) {
		throw new Error("Trying to use ThemeContext outside of ThemeContextProvider")
	}

	return themeContext
}
