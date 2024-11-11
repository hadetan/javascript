function funcThis() {
	console.log(this);
}
// funcThis();

// console.log(this);
//v8 engine

const userData = {
	name: 'Aquib',
	age: 22,
	isAlive: true,
	address: {
		country: 'India',
		state: 'Delhi',
		previousAddress: {
			prevCountry: 'India',
			prevState: 'Bombay',
		},
	},
	greet: function () {
		console.log(
			`Hello ${this.name}, who is from ${this.address.state}, who was previously living in ${this.address.previousAddress.prevState}`
		);
		setTimeout(() => {
			console.log(
				'this will be accessible here in arrowed function which is inside of a normal function',
				this.name
			);
		}, 1000);
	},
	greet2: () => {
		console.log(
			`Hello ${this.name}, who is from ${this.address.state}, who was previously living in ${this.address.previousAddress.prevState}`
		);
	},
};

// userData.greet();
// userData.greet2();

// function Person(name) {
//     this.name = name;
// }

// const person1 = new Person("dilal");
// console.log(person1.name);

// const emptyobj = {};

// emptyobj.name = "aquib"

// console.log(emptyobj.name);

//defining a class
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	greet() {
		console.log(this.name, this.age);
	}
}

//extending previous class with new class
class Students extends Person {
	constructor(name, age, grade) {
		// this.name = name;
		// this.age = age;
        //super keyword
		super(name, age);
		this.grade = grade;
	}

	studyingAt() {
		console.log(`I am in ${this.grade}`);
	}
}

//                  this is called instance
const studentGreet = new Students('Aquib', '23', '5th');

// studentGreet.greet();
// studentGreet.studyingAt();

//creating a new instance
// const personGreet = new Person2("dilal");

//calling the function inside of the class, which is saved as new instance as `personGreet`
// personGreet.greet();

// { //superclass
//     let i = 4;
//     console.log(x);
//     { //subclass
//         console.log(i);
//         let x = 4;
//     }
// }


//static method
class Sum {
    static add(a, b) {
        return a + b;
    }
}

//in static method we do not need to create a new instance.
// console.log(Sum.add(4,5));
