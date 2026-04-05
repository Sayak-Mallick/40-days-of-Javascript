// Arithmetic Operator

let a = 10;
let b = 3;

console.log(a + b); // Addition: 13
console.log(a - b); // Subtraction: 7
console.log(a * b); // Multiplication: 30
console.log(a / b); // Division: 3.333...
console.log(a % b); // Modulus (Remainder): 1
console.log(a ** b); // Exponentiation (10^3): 1000

// Increment and Decrement
a++; // Post-increment (a becomes 11)
--b; // Pre-decrement (b becomes 2)


// Assignment Operator

let x = 5;
x += 5; // x = x + 5 (10)
x -= 2; // x = x - 2 (8)
x *= 3; // x = x * 3 (24)
x /= 4; // x = x / 4 (6)
x %= 4; // x = x % 4 (2)
x **= 3; // x = x ** 3 (8)

// Comparison Operator

console.log(5 == "5");  // true (type coercion)
console.log(5 === "5"); // false (strict check)

console.log(10 != 5);   // true
console.log(10 !== "10"); // true

console.log(10 > 5);    // true
console.log(10 <= 10);  // true


// Logical Operators

let highIncome = true;
let goodCreditScore = false;

// AND (&&): Returns true if both are true
console.log(highIncome && goodCreditScore); // false

// OR (||): Returns true if at least one is true
console.log(highIncome || goodCreditScore); // true

// NOT (!): Inverts the boolean value
console.log(!highIncome); // false


// Ternary (Conditional) Operator


let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // "Adult"


// Type Operators

console.log(typeof "Hello"); // "string"
console.log(typeof 42);      // "number"

let date = new Date();
console.log(date instanceof Date); // true

// Bitwise Operators

console.log(5 & 1); // AND: 0001 (1)
console.log(5 | 1); // OR:  0101 (5)
console.log(5 ^ 1); // XOR: 0100 (4)
console.log(~5);    // NOT: -(5+1) = -6
console.log(5 << 1); // Left Shift: 1010 (10)


// Modern ES2020+ Operators

let score = 0;
console.log(score ?? 10); // 0 (because score is defined)
console.log(score || 10); // 10 (because 0 is falsy)



let user = { profile: { name: "Tapas" } };
console.log(user?.profile?.name); // "Tapas"
console.log(user?.address?.city); // undefined (doesn't throw error)


// String Operator
let firstName = "Tapas";
let greeting = "Hello " + firstName; // "Hello Tapas"