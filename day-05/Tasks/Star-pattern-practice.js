// star patter practice

// 1.Simple Square

console.log("*****Simple Square*****");
for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 4; j++) {
    row = row + "*";
  }
  console.log(row);
}

// 2. Right Triangle

console.log("*****Right Triangle*****");
for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}

// 3. Reverse RIght Triangle

console.log("*****Reverse Right Triangle*****");
for (let i = 4; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}

// Pyramid Pattern

console.log("*****Pyramid Pattern*****");

for (let i = 1; i <= 4; i++) {
  let row = "";

  // spaces
  for (let s = 1; s <= 4 - i; s++) {
    row += " ";
  }

  // stars
  for (let j = 1; j <= 2 * i - 1; j++) {
    row += "*";
  }

  console.log(row);
}

console.log("*****Reverse Pyramid Pattern*****");

for (let i = 4; i >= 1; i--) {
  let row = "";
  //spaces
  for (let s = 1; s <= 4 - i; s++) {
    row += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    row += "*";
  }
  console.log(row);
}
