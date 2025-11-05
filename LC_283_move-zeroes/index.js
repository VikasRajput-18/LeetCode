var moveZeroes = function (nums) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[k] = nums[i]
            k++
        }
    }
    for (let i = k; i < nums.length; i++) {
        nums[k] = 0
        k++
    }
    return nums
};

console.log(moveZeroes([0, 1, 0, 3, 12]))