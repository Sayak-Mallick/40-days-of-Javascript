// Addition of even number between 1-100

let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum = sum + i;
  }
}

console.log("🚀 ~ sum:", sum);

let language = "JavaScript";

for (let i = 0; i < language.length; i++) {
  console.log(language.charAt(i));
}

// Nested Loop

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`Row ${i}, Column ${j}`);
  }
}

// Multiple counters for single loop

for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
  console.log(`i: ${i}, j: ${j}`);
}
