//named export
export function sum(a, b) {
	return a + b;
}

export function square(x) {
	return x * x;
}

//default export
export default function divide(a, b) {
	return a / b;
}

//Renaming exports
const cube = (x) => {
	return x * x * x;
};

export { cube as cb };
