var transpose = function (matrix) {
    let res = Array.from({ length: matrix[0].length }, () => Array(matrix.length).fill(0))

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            res[j][i] = matrix[i][j]
        }
    }
    return res
};

console.log(transpose([[1, 2, 3], [4, 5, 6]]))