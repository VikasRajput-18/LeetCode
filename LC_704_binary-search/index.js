var search = function (nums, target) {
    let left = 0;
    let right = nums.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }

    }
    return -1
};

let nums = [2], target = 2

console.log(search(nums, target))