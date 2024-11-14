function greet(name, callbackFunction) {
	console.log(`hello ${name}!`);
	callbackFunction();
}

function goodbye() {
	console.log('goodbye!');
}

// greet('aquib', goodbye);

//greet, goodbye

function delayedGreet(name, callback) {
	setTimeout(() => {
		console.log(`hello ${name}!`);
	}, 2000);
	callback();
}
function notify() {
	console.log('Greeting complete!');
}
// delayedGreet("dilal", notify);

//delayedGreet, notify, anonymous function 2s later, calls the callback, calls the anonymous function after 2s.

function processArray(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = callback(arr[i]);
	}

	return arr;
}

const numbers = [1, 2, 3, 4];

// const multipliedNum = processArray(numbers, (number) => {
// 	console.log(number * 2);
// });