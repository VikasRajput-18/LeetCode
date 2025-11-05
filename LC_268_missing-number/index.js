// var missingNumber = function (nums) {
//     let sortNums = nums.sort((a, b) => a - b);
//     console.log(sortNums)
//     let missingNumber = 0;
//     for (let i = 0; i < sortNums.length; i++) {
//         if (sortNums[0] !== 0) {
//             return 0
//         }
//         if (sortNums[i + 1] > (nums[i] + 1)) {
//             return sortNums[i] + 1
//         } else {
//             missingNumber = sortNums[sortNums.length - 1] + 1
//         }
//     }

//     return missingNumber
// };
var missingNumber = function (nums) {
    const n = nums.length;
    const totalSum = n * (n + 1) / 2;
    let actualSum = 0;
    for (let num of nums) {
        actualSum += num
    }
    return totalSum - actualSum
};

console.log(missingNumber([1]))
console.log(missingNumber([0, 1]))
console.log(missingNumber([3, 0, 1]))