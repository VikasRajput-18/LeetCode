var duplicateNumbersXOR = function (nums) {
    let map = new Map();

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    let res = 0;

    for (let num of map) {
        if (num[1] === 2) {
            res ^= num[0]
        }
    }

    return res
}

console.log(duplicateNumbersXOR([1, 2, 1, 3]))
console.log(duplicateNumbersXOR([1, 2, 3]))
console.log(duplicateNumbersXOR([1, 2, 2, 1]))