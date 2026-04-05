function characterCount(str) {
  const countMap = new Map();
  for (let char of str.toLowerCase()) {
    const count = countMap.get(char) || 0;
    countMap.set(char, count + 1);
  }
  return countMap;
}

console.log(characterCount("Sayak Mallick"));