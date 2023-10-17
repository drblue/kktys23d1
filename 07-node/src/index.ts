import fs from "fs";
// const fs = require("fs")

console.log("Hello TypeScript from Node");

const add = (a: number, b: number) => {
	return a + b;
};

const sum = add(1295, 42);
console.log("Sum is:", sum);

fs.writeFileSync("lolcats.txt", "are funny");
