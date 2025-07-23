
var triangularSum = function (nums) {
    if (nums.length === 1) return nums[0];

    let row = [];

    for (let i = 0; i < nums.length - 1; i++) {
        let addSum = nums[i] + nums[i + 1];
        if (addSum > 9) {
            addSum = addSum % 10;
        }
        row.push(addSum)
    }

    return triangularSum(row)
};

console.log(triangularSum([1, 2, 3, 4, 5]))