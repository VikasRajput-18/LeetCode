
function gcd(high, low){
    if(low === 0) return high;
    return gcd(low, high % low)
}

var gcdOfOddEvenSums = function (n) {
    let sumOfEven = 0, sumOfOdd = 0;

    for (let i = 1; i <= n; i++) {
        sumOfEven += i * 2;
        sumOfOdd += (i * 2) - 1;
    }

    const result  = gcd(sumOfEven , sumOfOdd)
    return result
}


console.log(gcdOfOddEvenSums(6))