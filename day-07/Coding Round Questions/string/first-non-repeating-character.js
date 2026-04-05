function firstNonRepeatingCharacter(str) {
  const charCount = new Map();
  for (let char of str.toLowerCase()) {
    const count = charCount.get(char) || 0;
    charCount.set(char, count + 1);
  }

  for (let char of str.toLowerCase()) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  // 3. If no unique character exists
  return null;
}

console.log(firstNonRepeatingCharacter("sayak mallick"));

