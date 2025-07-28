var maxSubArray = function (nums) {
    let current_sum = nums[0];
    let max_sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        current_sum = Math.max(nums[i], nums[i] + current_sum);
        max_sum = Math.max(current_sum, max_sum);
    }

    return max_sum
};





console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))