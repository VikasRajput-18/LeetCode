var isAnagram = function (s, t) {
    let obj = {}

    for (let char of s) {
        if (obj[char]) {
            obj[char] = obj[char] + 1
        } else {
            obj[char] = 1

        }
    }
    for (let char of t) {
        if (obj[char]) {
            obj[char] = obj[char] - 1
        } else {
            return false

        }
    }
    for (let key in obj) {
        if (obj[key] > 0) return false
    }
    return true
};

console.log(isAnagram("ab", "a"))