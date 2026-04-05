// 1. Variable Hoisting with 'var'
// Declarations are hoisted and initialized with 'undefined'
console.log("name is ", name);
var name;
name = "Tom";
console.log("name is ", name);

// 2. Variable Hoisting with 'let' and 'const'
// They are hoisted but stay in the "Temporal Dead Zone" (TDZ)
try {
  console.log(age); // ReferenceError
  let age = 25;
} catch (e) {
  console.log("let/const error:", e.message);
}

// 3. Function Hoisting
// Function declarations are fully hoisted
greet(); 

function greet() {
  console.log("Hello from hoisted function!");
}

// 4. Function Expressions and Hoisting
// Only the variable declaration is hoisted, not the assignment
try {
  sayHi(); // TypeError: sayHi is not a function
} catch (e) {
  console.log("Function expression error:", e.message);
}

var sayHi = function() {
  console.log("Hi!");
};

// 5. Class Hoisting
// Classes are not hoisted
// new Car(); // ReferenceError
class Car {}