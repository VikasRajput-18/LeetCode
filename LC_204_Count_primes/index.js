var countPrimes = function (n) {
    if (n < 2) return 0;
    let isPrime = Array.from({ length: n }).fill(true)

    isPrime[0] = isPrime[1] = false
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j = j + i) {
                isPrime[j] = false;
            }
        }
    }

    let count = 0;

    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++
        }
    }
    return count
}

console.log(countPrimes(100))