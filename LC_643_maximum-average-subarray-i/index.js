var findMaxAverage = function (nums, k) {
    let avg = -Infinity;


    for (let i = 0; i <= nums.length - k; i++) {
        let sum = 0
        for (let j = i; j < i + k; j++) {
            sum += nums[j]
        }

        avg = Math.max(avg, sum / k)
    }

    return avg

};


console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))