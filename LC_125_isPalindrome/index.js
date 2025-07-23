function isPalindrome(s) {
  s = s.toLowerCase().replace(/[\W_]/g, "");
  console.log(s)
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    } else {
      left++;
      right--;
    }
}
return true
}

console.log(isPalindrome("abba"));
