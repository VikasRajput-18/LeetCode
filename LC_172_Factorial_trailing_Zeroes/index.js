
var trailingZeroes = function (n) {
    let count = 0;

    for (let i = 5; n / i >= 1; i = i * 5) {
        count += Math.floor(n / i)
    }
    return count
};

