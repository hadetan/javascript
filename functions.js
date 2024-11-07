// there are total 4 types of functions in javascript

//normal function
// function name(parameters) {
//     body of function
// }

//anonymous function / callback function
// (parameter) => {
//     body of anonymous function
// }

//anonymous functions with being assigned with a variable
// const name = (paramters) => {
//      body of anonymous variable saved function
// }

//named function being assigned to a variable
// const name = function funcName(parameters) {
//     // body of this functions
// }

// function demo() {
//     console.log("I am inside a function");
// }

// demo();

//sending values in parameters

// function greetUser(name) {
//     console.log("hello", name);
// }

// greetUser("dilal");

// function sum(a, b) {
// 	console.log(a + b);
// }

// sum(2, 2);

function sum2(a, b) {
    return a + b;
    console.log("this is after the return");
}

const returnedValue = sum2(2, 4);
//const returnedValue = 6;

// console.log(sum2(3,7));


// console.log(returnedValue);

//shorthand function
const abc = name => console.log("hello", name);

// abc("aquib");