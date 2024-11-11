// try {
//     //our code
// } catch(error) {
//     console.log(error);
// } finally {
//     console.log("i will run no matter what the situation is.");
// }

// try {
//     let i = 10;
//     console.log(i);

//     let person = undefined;
//     console.log(person.name);
// } catch (error) {
//     console.log(error);
// } finally {
//     console.log("i will run no matter what the situation is.");
// }

// let i = 10;
// console.log(i);

// let person = undefined;
// console.log(person.name);

//Throwing custom errors
const isEqual = (a, b) => {
	if (b === 0) {
		throw new Error('This is an error');
	}
	return a / b;
};

//we get an error object inside which we get name and message
// try {
//     console.log(isEqual(10, 0));
// } catch (error) {
//     // console.log(error.name);
//     console.log(error.message);
// }

//nested trycatch

// try {
//     try {
//         try {

//         } catch (error) {

//         } finally {

//         }
//     } catch (error) {

//     } finally {

//     }
// } catch (error) {

// } finally {

// }

//extending Error class with custom error

class validationError extends Error {
	constructor(message) {
		super(message);
		this.name = 'validation error';
	}
}

const validAge = (age) => {
	let falseVariable = undefined;
	if (falseVariable === undefined) {
		throw new Error('This variable is undefined');
	}

	if (age < 18) {
		throw new validationError('You are underaged to drive');
	}

	return 'you are valid to drive';
};

try {
	console.log(validAge(16));
} catch (error) {
	// console.log(error);
	if (error instanceof validationError) {
		console.log(error);
	} else {
		console.log('General Error: ', error.message);
	}
}

