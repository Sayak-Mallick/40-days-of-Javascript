console.log("Day 2 -> Variables and Data Types");

// Variable =  A variable is a storage where it is used to store data in javascript

// let/const storage_name = value;

// var: Function scoped (Global Scoped) , can be redeclared and reassigned
// let: Block scoped , can be reassigned
// const: Block scoped , cannot be reassigned

var address = "Bangalore"
console.log("🚀 ~ address:", address)

address = "Mumbai"
console.log("🚀 ~ address:", address)

var address = "Delhi"
console.log("🚀 ~ address:", address)


let age = 23
console.log("🚀 ~ age:", age)

age = 24
console.log("🚀 ~ age:", age)

const name = "Tapas"
console.log("🚀 ~ name:", name)


// Primitive Data Types:
// 1. String: Textual data (e.g., "Hello")
// 2. Number: Integers and floating-point numbers (e.g., 10, 3.14)
// 3. Boolean: true or false
// 4. Undefined: A variable that has been declared but not assigned a value
// 5. Null: Represents the intentional absence of any object value
// 6. BigInt: For integers larger than the Number limit
// 7. Symbol: Unique and immutable identifier

// Usage of Primitive Data Types:
let city = "Kolkata"; // String
let marks = 95; // Number
let isPassed = true; // Boolean
let salary; // Undefined
let experience = null; // Null
let bigNumber = 9007199254740991n; // BigInt
let id = Symbol("id"); // Symbol

console.log(typeof city, typeof marks, typeof isPassed, typeof salary, typeof experience, typeof bigNumber, typeof id);

// Non-Primitive Data Types (Reference Types):
// 1. Object: Collection of key-value pairs
// 2. Array: List of values

let user = {
    name: "Tapas",
    age: 24
}; // Object

let colors = ["Red", "Green", "Blue"]; // Array

console.log("Object:", user);
console.log("Array:", colors);
 