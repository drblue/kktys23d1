export type Response<T> = {
	status: "success" | "fail" | "error" | "lolcats",
	error?: string
	data: T
}
