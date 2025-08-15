
function search(arr, target, position) {
    let left = 0, right = arr.length - 1, result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            result = mid
            if (position === "first") {
                right = mid - 1
            } else {
                left = mid + 1

            }
        } else if (arr[mid] < target) {
            left = mid + 1

        } else {
            right = mid - 1
        }

    }

    return result
}

var searchRange = function (nums, target) {
    let first = search(nums, target, "first")
    let last = search(nums, target, "last")

    return [first, last]
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
console.log(searchRange([5, 7, 7, 8, 8, 10], 8))