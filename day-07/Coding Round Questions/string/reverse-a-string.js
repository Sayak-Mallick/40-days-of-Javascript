function reverseWithReverse(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str.split("").reverse().join("");
}

console.log("Reverse with reverse method: " + reverseWithReverse("hello"));

function reverseWithoutReverse(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(
  "Reverse without reverse method: " + reverseWithoutReverse("sayak mallick")
);
