// var peakIndexInMountainArray = function (arr) {
//     let max = arr[0];
//     let index = 0

//     for (let i = 1; i < arr.length; i++) {
//         max = Math.max(arr[i], max);
//         console.log(max, arr[i])
//         if (arr[i] >= max) {
//             index = i
//         }
//     }
//     return index
// };
var peakIndexInMountainArray = function (arr) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left

};

console.log(peakIndexInMountainArray([0, 10, 6, 9, 0]))