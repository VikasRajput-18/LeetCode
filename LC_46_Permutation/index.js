
var permute = function (nums) {
    const result = []
    function backtrack(i) {
        if (i === nums.length) {
            result.push([...nums]);
        }

        for (let j = i; j < nums.length; j++) {
            swap(nums, i, j);
            backtrack(i + 1);
            swap(nums, i, j);
        }
    }
    backtrack(0);
    return result
}

function swap(nums, start, end) {
    [nums[start], nums[end]] = [nums[end], nums[start]]
}
console.log(permute([1, 2, 3]))