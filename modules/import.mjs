import { sum as sm, square, cb } from './export.mjs';
import divide from './export.mjs';

//extension name - ESlint

console.log(cb(40));

console.log(sm(10, 30));
console.log(sm(10, 40));
console.log(sm(10, 20));

console.log(divide(10,20));

console.log(square(20));

//In order to use import and export based features we need to use a new extension called as .mjs
