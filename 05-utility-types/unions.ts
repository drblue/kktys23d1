// have to export something so this file is not run in the global scope
export {}

type HttpVerbs = "GET" | "POST" | "PATCH" | "PUT" | "DELETE"

type NonDestructiveHttpVerbs = Exclude<HttpVerbs, "DELETE">
//                 ^?

const method1: HttpVerbs = "DELETE"  // works
const method2: NonDestructiveHttpVerbs = "DELETE"  // wont work

type CreatingHttpVerbs = Extract<HttpVerbs, "GET" | "PUT">
//             ^?
