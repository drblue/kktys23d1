let myString: string;
myString = "Hello, world!";

let myNumber: number;
myNumber = 1337;

let myBoolean: boolean;
myBoolean = true;

let myName = "Johan";

const greet = (name: string, age?: number) => {
	if (!age) {
		console.log(`Hello, ${name}!`);
		return;
	}
	console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet("Alice", 42);
greet("Script-kiddo", 4);
greet("Charlie");

const fancyGreet = (name = "Anonymous", age?: number) => {
	if (!age) {
		console.log(`Oh hello there good sir/ma'am, ${name}!`);
		return `Oh hello there good sir/ma'am, ${name}!`;
	}
	console.log(`Oh hello there good sir/ma'am, ${name}! You look splendid for being ${age} years old.`);
	return `Oh hello there good sir/ma'am, ${name}! You look splendid for being ${age} years old.`;
}

fancyGreet();
fancyGreet("Harold");
fancyGreet(undefined, 42);
// fancyGreet(null, 50);

const pets = ["cat", "dog", "hamster", "goldfish"];
pets.forEach((pet) => {
	console.log(pet.toLocaleUpperCase());
});

// const ages = [2, 4, 1, 3, 5, 2, 1, 3, 4, 5, 2, 1, 3, 4, 5];
// ages.forEach((age) => {
// 	// console.log(age.toLocaleUpperCase()); // Error: Property 'toLocaleUpperCase' does not exist on type 'number'.ts(2339)
// });

const names: string[] = [];
names.push("Alice");
// names.push(42);
// names.push(true);

const ages: number[] = [];

// const printcoords = (pt: { x: number, y: number, z?: number }) => {
// 	return `x=${pt.x}, y=${pt.y}, z=${pt.z}`;
// }

type Point = {
	x: number,
	y: number,
	z?: number
}

const printCoords = (pt: Point) => {
	return `x=${pt.x}, y=${pt.y}, z=${pt.z}`;
}

console.log(printCoords({ x: 42, y: 1337 }));
console.log(printCoords({ x: 42, y: 1337, z: 256 }));

// type aliases can be assigned primitive types
type nummer = number
let x: nummer = 42
const sumNum = (a: nummer, b: number) => a + b;
sumNum(x, 1337) // :number

type stringOrNumber = string | number
let s: stringOrNumber = 42
s = "3LiT3"

const makeMoreInteresting = (msg: stringOrNumber) => {
	return typeof msg === "string"
		? msg.toUpperCase() + "!!!!!!!"
		: String(msg) + "!!!!!!!"
}
console.log(makeMoreInteresting("lolcats are funny"))
console.log(makeMoreInteresting(1337))
// console.log(makeMoreInteresting(["loldogs"])) // not workey

interface IPoint {
	x: number
	y: number
	z?: stringOrNumber
}

interface IAnimal {
	name: string
}

interface IDog extends IAnimal {
	legs: number
}

// This will be merged with the above interface without conflicts
interface IDog extends IAnimal {
	wagsTail: boolean
}

type Animal = {
	name: string
}

type Dog = Animal & {
	legs: number
}

// No cake for you!
// type Dog = Animal & {
// 	wagsTail: boolean
// }

let mrFluffles: Dog = {
	name: "Mr Fluffles",
	legs: 4
}


// interface Todo {
// 	title: string
// }
type Todo = {
	title: string
}

type TodoList = Todo[]

type SimpleTodos = string[]
