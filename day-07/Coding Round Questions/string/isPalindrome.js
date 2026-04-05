function isPalindrome(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  for (let left = 0, right = str.length - 1; left < right; left++, right--) {
    if (str[left] !== str[right]) {
      return false;
    }
    return true;
  }
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("malayalam"));
