// const names = ["aquib", "dilal", "priyanka", "chandra"];

// const [n1, n2, n3, n4] = names;
// const [, n1, , n2] = names;

// console.log(n1, n2);

// const nums = [1,2,3];

// const [n1, , n2] = nums;

// console.log(n1, n2);

// rest & spread

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

//rest
// let [n1, n2, ...newVar] = arr;

// console.log(n1, n2);
// console.log(newVar);

//spread

// function sum(a, b) {
//     return a+b;
// }
// const arr2 = [10,20];
// console.log(...arr2);
// console.log(sum(...arr2));

let fruits = ['apple', 'banana', 'pineapple', 'orange'];

// console.log(fruits.length);
fruits.push('cherry');

// console.log(fruits);

let lastFruit = fruits.pop();

// console.log(lastFruit);
// console.log(fruits);

// fruits.sort();
// console.log(fruits);
//b    a     c    d
let numbers = [13, 1000, 499, 500];

numbers.sort((x, y) => {
	return x - y;
	// console.log(x, y);
});

// a - b / c - a / d - c
// console.log(numbers);

// console.log(fruits.includes("ananas"));

// console.log(fruits.indexOf("pineapple"));
// console.log(fruits.indexOf("ananas"));

// const newFruit = fruits.splice(0, 1);
// console.log(newFruit);
// console.log(fruits);

// fruits.forEach((value, index) => {
// 	console.log(value, index);
// });

let userData = {
	name: 'Aquib',
	age: 22,
	country: 'India',
};

//modifying object
userData.name = 'Dilal';
userData.age = 20;

//adding new field in object
userData.city = 'Assam';

//deleting field in object
delete userData.age;

// console.log(userData);

// console.log(userData.name);

//for in loop for objects

// for (let x in userData) {
// 	console.log(x, userData[x]);
// }

let arr2 = ["aquib", "dilal"];

//for in running in array

// for (let x in arr2) {
// 	console.log(x, arr2[x]);
// }

//for of loop for arrays

// for (let i of arr2) {
// 	console.log(i);
// }

// arr2.forEach((value, index) => {

// })

// for (initiating variable; condition; iteration) {
// 	logic
// }