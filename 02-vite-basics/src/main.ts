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
