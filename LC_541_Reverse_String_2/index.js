var reverseStr = function (s, k) {
    s = s.split("");

    let i = 0;


    while (i < s.length - 1) {
        let left = i;
        let right = Math.min(i + k - 1, s.length - 1)

        while (left < right) {
            [s[left], s[right]] = [s[right], s[left]];
            left++;
            right--;

        }
        i = i + 2 * k
    }



    return s.join("")
};


console.log(reverseStr("abcdefg", 2))
console.log(reverseStr("abcd", 2))