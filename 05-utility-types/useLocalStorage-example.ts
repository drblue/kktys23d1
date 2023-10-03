import { useState } from "react"

// [string, (val: string) => void]

const useLocalStorage = () => {
//      ^?
	let value = ""
	const setValue = (val: string) => {}
//        ^?

	return [
		value,
		setValue
	] as const
}

const [
	query,
// ^?
	setQuery
// ^?
] = useLocalStorage()
