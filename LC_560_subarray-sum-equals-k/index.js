var subarraySum = function (nums, k) {
    let count = 0;
    let currentSum = 0;
    const prefix = new Map();

    prefix.set(0, 1);

    for (const num of nums) {
        currentSum += num;

        if (prefix.has(currentSum - k)) {
            count += prefix.get(currentSum - k)
        }
        prefix.set(currentSum, (prefix.get(currentSum) || 0) + 1)
    }

    return count;

};


console.log(subarraySum([1, 2, 3], 3))