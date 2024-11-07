// Difference between let and var scope wise.

// {
//     let x = 2;
//     {
//         x
//         let i = 1
//         {
//             i
//         }
//     }

// }

// let 1num1 = 1

// let x = 1;
// let X = 1;

// let number = true;

// let string = String(number)

// console.log(`number var is ${typeof(string), string}`);

// console.log(`type of empty string ${Boolean("abc")}`);

// console.log(`boolean 0 is ${Boolean(0)}`);
// console.log(`boolean 1 is ${Boolean(1)}`);

// console.log(`number to boolean ${Number(true)}`);
// console.log(`number to boolean ${Number(false)}`);

//falsy
// console.log(Boolean(undefined)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean('')); // false

//truthy
// console.log(Boolean('Hello')); // true
// console.log(Boolean(42)); // true
// console.log(Boolean([])); // true (empty array)
// console.log(Boolean({})); // true (empty object)
// console.log(Boolean(function() {})); // true (function)

// let isFalse = 0;
// let isTrue = 1;

// console.log(`isFalse variable ${Boolean(isFalse)}`);
// console.log(`isTrue variable ${Boolean(isTrue)}`);

// console.log(`sending number inside number function ${Number("123")}`);
// console.log(`sending number and alphabet inside number function ${Number("123abc")}`);

// if (0) {
//     console.log(`javascript will not enter here`);
// }

// if (1) {
//     console.log(`this will be printed`);
// }

//Mathematical operations -

// console.log('5' - 3);
// console.log(5 - "3b");

// console.log('5' + 3);

// console.log('5' * 3);

// console.log('5' / 3);

// console.log('5' % 3);

// console.log(5 ** 3);

// Increment and Decrement Operators

// let q = 5;
// let y = 5;

// //prefix
// console.log(++q);

// //postifx
// console.log(y++);

// console.log("post fix's value after increment", y);

// console.log('==', "5" == 5);
// console.log(0 == false);

// console.log("5" === 5);

// console.log(0 === false);