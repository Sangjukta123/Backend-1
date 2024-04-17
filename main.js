// main.js
import { add, multiply, divide, subtract } from './calculator.js';

// Using the functions from the calculator module
let resultSum = add(5, 3);
let resultMultiply = multiply(5, 3);
let resultDivide = divide(6, 2);
let resultSubtract = subtract(5, 3);

// Logging the results
console.log("Sum:", resultSum);
console.log("Multiplication:", resultMultiply);
console.log("Division:", resultDivide);
console.log("Subtraction:", resultSubtract);
