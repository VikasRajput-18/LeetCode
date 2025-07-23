// var searchMatrix = function (matrix, target) {
//     let row = matrix.length;
//     let col = matrix[0].length;

//     for (let i = 0; i < row; i++) {
//         for (let j = 0; j < col; j++) {
//             if (matrix[i][j] === target) return true
//         }
//     }

//     return false
// };
var searchMatrix = function (matrix, target) {
    let row = matrix.length;
    let top = 0;
    let col = matrix[0].length - 1;

    while (top < row && col >= 0) {
        if (matrix[top][col] === target) return true
        else if (matrix[top][col] < target) {
            top++
        }
        else {
            col--
        }

    }



    return false
};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13))
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))