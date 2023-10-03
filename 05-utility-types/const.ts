// have to export something so this file is not run in the global scope
export {}

// const username = "johan"
//       ^?

let username = "johan"

type TypeOfUsername = typeof username


const users = [
//       ^?
	"johan",
	"pelle",
	"alicia",
	"kajsa"
] as const

type TUsers = typeof users
//        ^?


const loginAllUsers = (allUsers: TUsers) => {}


// users[0] = "bob"
// users.push("elliot")
// users.unshift("kajsa")    // ["kajsa", "johan", "pelle", "alicia"]

const login = (user: "johan" | "pelle" | "alicia") => {
	console.log(`${user} has been logged in...`)
	return true
}

type LoginFunction = typeof login
//        ^?
type LoginReturnType = ReturnType<typeof login>
//           ^?

login("johan")

const firstUser = users[0]
//     ^?
login(firstUser)


const obj1 = {
	name: "bob"
}

const obj2 = obj1
obj2.name = "calle"
console.log(obj1.name) // "calle"



const user = {
//     ^?
	username: "johan",
	role: "meme-lord",
	level: 1337,
} as const

login(user.username)




const loginAsync = async (username: string) => {
//     ^?
	console.log(`Logging in ${username}`)
	return true
}

type LoginAsync = typeof loginAsync
//     ^?

type LoginAsyncReturnType = ReturnType<LoginAsync>
//    ^?
type LoginAsyncResolvedReturnType = Awaited<LoginAsyncReturnType>
//                      ^?

type Haxx0rType = Awaited<ReturnType<typeof loginAsync>>
//      ^?
