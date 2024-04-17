// calculator.js

export function add(x, y) {
    return x + y;
  }
  
  export function multiply(x, y) {
    return x * y;
  }
  
  export function divide(x, y) {
    if (y !== 0) {
      return x / y;
    } else {
      return "Error: Division by zero";
    }
  }
  
  export function subtract(x, y) {
    return x - y;
  }
  