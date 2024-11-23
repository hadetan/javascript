//map

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr.map((value, index, array) => {
//     console.log(`value:${value} index:${index} array: ${array}`);
// });

const students = [
	{
		name: 'a',
		marks: 20,
	},
	{
		name: 'b',
		marks: 84,
		email: 'aquib@gmail.com',
	},
	{
		name: 'c',
		marks: 39,
		email: 'aquib@gmail.com',
	},
	{
		name: 'd',
		marks: 68,
	},
	{
		name: 'e',
		marks: 90,
	},
];

const isPassedStudent2 = students.forEach((value) => {
	if (value.marks < 50) {
		value.isPassed = false;
	} else {
		value.isPassed = true;
	}
	return value;
});

console.log(isPassedStudent2);

const isPassedStudent = students.map((value) => {
	if (value.marks < 50) {
		value.isPassed = false;
	} else {
		value.isPassed = true;
		value.premium = true;
	}

	return value;
});

// console.log(isPassedStudent);

//filter

const arr2 = arr.filter((value) => {
	return (value = value % 2 == 0);
});

// console.log(arr2);

const passedStudents = students.filter((value) => {
	return value.premium === true;
});

// console.log(passedStudents);

//find

const isPremium = students.find((value) => {
	return value.email === 'aquib@gmail.com';
});

// console.log(isPremium);

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8];

const askedValue = arr3.find((value) => {
	return value === 3;
});

// console.log(askedValue);

//ES6 concepts

function greet(name = 'Guest') {
	return `hello ${name}`;
}

// console.log(greet("aquib"));
// console.log(greet());

// Spread operators

//array
const number = [1, 2, 3, 4];
const number2 = [...number, 5, 6, 7, 8];

// console.log(number2);

function sum(a, b, c) {
	return a + b + c;
}

const number3 = [10, 2, 31, 3];

// console.log(sum(...number3));
// console.log(sum(10, 2, 31));

//object

const obj1 = {
	a: 2,
	b: 4,
	c: 6,
};

const obj2 = {
	...obj1,
	d: 4,
	e: 6,
	f: 13,
};

console.log(obj2);

// const newObj = { ...obj1, ...obj2 };

// console.log(newObj);

//Rest

//array

function sum(...number) {
	// const abc = number.reduce(
	// 	(prevValue, currentVal) => prevValue + currentVal, 0);
	// const con = number.reduce(
	// 	(prevValue, currentVal) => console.log(prevValue + currentVal),
	// 	0
	// );

	console.log(number);

	number.forEach((value, index) => {
		console.log(value, index);
	})

	// return abc;
}

console.log(sum(1, 2, 3));


const countries = [
	'india',
	'japan',
	'america',
	'japan',
	'china',
	'korea',
	'newzieland',
	'ireland',
	'finland',
];

const filteredCountry = countries.filter((country) => {
	country = country.includes("r");
	return country
})
console.log(filteredCountry);