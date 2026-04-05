// Control Flow in JavaScript

// 1. Conditional Statements
// Used to perform different actions based on different conditions.

let temperature = 30;

if (temperature > 35) {
    console.log("It's a hot day!");
} else if (temperature >= 20) {
    console.log("It's a pleasant day.");
} else {
    console.log("It's a cold day.");
}

// 2. Switch Statement
// Used to select one of many code blocks to be executed.

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Friday":
        console.log("Weekend is near.");
        break;
    default:
        console.log("Just another day.");
}


// Note: Control flow allows your program to make decisions and repeat tasks efficiently.