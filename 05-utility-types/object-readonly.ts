// have to export something so this file is not run in the global scope
export {}

const user = {
//     ^?
	username: "johan",
	role: "meme-lord",
	level: 1337,
} as const

// user.username = "thomas a. anderson"
// user.role = "hacker of the matrix"
// user.level = Infinity


type User = {
	username: string,
	role: string,
	level: number
}
type UserKey = keyof User     // type UserKey = "username" | "role" | "level"
//       ^?


type ReadonlyUser = Readonly<User>
//    ^?


const user2: ReadonlyUser = {
	username: "alicia",
	role: "superadmin",
	level: 100,
}

const user3 = user2
user3.name = "kajsa"

user2.role = "mega-admin"
user2.level = 42


const user4 = {
	username: "alicia",
	role: "superadmin",
	level: 100,
	email: "alicia@email.com"
}

type TUser = typeof user4
//        ^?
type TUserKey = keyof TUser
//    ^?

