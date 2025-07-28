var findGCD = function (nums) {
    let min = Math.min(...nums)
    let max = Math.max(...nums)

    while (max !== 0) {
        let temp = max;
        max = min % max;
        min = temp;
    }

    return min
}

console.log(findGCD([2, 5, 6, 9, 10]))
console.log(findGCD([7, 5, 6, 8, 3]))