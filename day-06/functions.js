// Normal Function Declaration

function printNow() {
  console.log("Hello World");
}

printNow();

// Function as an Expression

let printItNow = function () {
  console.log("Hello Javascript");
};

printItNow();

// Parameters and Arguements

function sum(a, b) {
  // here a, b are parameters
  const result = a + b;
  return result;
}

let result = sum(10, 525); // here 10, 20 are arguements
console.log("🚀 ~ result:", result);

// return statement

function add(a, b) {
  return a + b;
}

let addition = add(5, 5);
console.log("🚀 ~ addition:", addition);

function double(x) {
  return 2 * x;
}

let doubleofAddition = double(addition);
console.log("🚀 ~ doubleofAddition:", doubleofAddition);

// Rest parameters

function addAll(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

let total = addAll(1, 2, 3, 4, 5);
console.log("🚀 ~ total:", total);

// Nested Functions

function outer() {
  console.log("Outer Function");

  // function inner() {
  //   console.log("Inner Function");
  // }

  // returning inner function from an outer function
  return function inner() {
    console.log("Inner Function");
  };

  // inner();
}

outer();

let retFun = outer();
retFun();

// Callback Functions

function foo(func) {
  console.log("FOOO");
  func();
}

foo(function bar() {
  console.log("BAR");
});

// Pure Functions

function hello(greeting) {
  return greeting + " World";
}

console.log(hello("Hello"));
console.log(hello("Hello"));
console.log(hello("Hello"));
console.log(hello("Hello"));

// Inpure Function

function random() {
  return Math.random();
}

console.log(random());
console.log(random());
console.log(random());
console.log(random());
console.log(random());

// Higher Order Function

function getCamera(camera) {
  camera();
}

getCamera(function () {
  console.log("Brand Name: Sony");
});

getCamera(function () {
  console.log("Brand Name: Canon");
});

function returnFunction() {
  return function () {
    console.log("Hello World");
  };
}

let myreturn = returnFunction();
myreturn();

// Arrow Function

let greetMe = (greetingMsg) => {
  return `${greetingMsg} Tapascript`;
};

console.log(greetMe("Nomoshkar"));
