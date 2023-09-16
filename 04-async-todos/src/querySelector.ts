// 😰
const headingEl = document.querySelector("h1")
//        ^?
console.log(headingEl?.innerText)

// 😱 (I promise this element exists)
const paragraphEl = document.querySelector("p")!
//       ^?
console.log(paragraphEl.innerText)

// 🤩
const subHeadingEl = document.querySelector("h2")
//           ^?
if (!subHeadingEl) {
	throw new Error("I can't do stuff without my h2")
}
console.log(subHeadingEl.innerText)
//                ^?

const todosEl = document.querySelector("#todos") as HTMLUListElement
//        ^?
