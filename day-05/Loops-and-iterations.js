// ==========================================
// LOOPS AND ITERATIONS IN JAVASCRIPT
// ==========================================

/**
 * 1. FOR LOOP
 * The most common way to iterate through a block of code a specific number of times.
 * Syntax: for (initialization; condition; afterthought)
 */
console.log("--- For Loop ---");
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}

/**
 * 2. WHILE LOOP
 * Executes its statements as long as a specified condition evaluates to true.
 * Syntax: while (condition)
 */
console.log("\n--- While Loop ---");
let count = 0;
while (count < 3) {
    console.log(`Count is: ${count}`);
    count++;
}

/**
 * 3. DO...WHILE LOOP
 * Similar to while, but the code block is executed ONCE before checking the condition.
 * Syntax: do { ... } while (condition);
 */
console.log("\n--- Do...While Loop ---");
let x = 0;
do {
    console.log(`X value: ${x}`);
    x++;
} while (x < 2);

/**
 * 4. FOR...IN LOOP
 * Iterates over the enumerable properties (keys) of an object.
 * Syntax: for (variable in object)
 */
console.log("\n--- For...In Loop (Objects) ---");
const user = { name: "John", age: 25, city: "New York" };
for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}

/**
 * 5. FOR...OF LOOP
 * Iterates over iterable objects like Arrays, Strings, Maps, NodeLists.
 * It returns the values, not the keys.
 * Syntax: for (variable of iterable)
 */
console.log("\n--- For...Of Loop (Arrays) ---");
const colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(color);
}

/**
 * 6. BREAK AND CONTINUE
 * break: Terminates the loop entirely.
 * continue: Skips the current iteration and moves to the next.
 */
console.log("\n--- Break and Continue ---");
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("Skipping 2 (continue)");
        continue;
    }
    if (i === 4) {
        console.log("Breaking at 4 (break)");
        break;
    }
    console.log(`Value: ${i}`);
}