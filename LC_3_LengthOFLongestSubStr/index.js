

function longestSubString(s){
  let windowCharWord = {}
  let windowStart = 0;
  let maxLength = 0;
  
  for(let i = 0; i<s.length; i++) {
    let endChar =s[i]
      if(windowCharWord[endChar] >= windowStart){
        windowStart = windowCharWord[endChar] + 1;
      }
      windowCharWord[endChar] = i
     maxLength =  Math.max(maxLength, i - windowStart + 1)
    }

  return maxLength
}


console.log(longestSubString("abbabbaa"))