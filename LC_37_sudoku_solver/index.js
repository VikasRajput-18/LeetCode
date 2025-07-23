

// function isValid(board, row, col, charNum) {
//     const reginRow = 3 * Math.floor(row / 3)
//     const reginCol = 3 * Math.floor(col / 3)

//     for (let i = 0; i < 9; i++) {
//         if (board[row][i] === charNum) return false;
//         if (board[i][col] === charNum) return false;
//         if (board[reginRow + Math.floor(i / 3)][reginCol + Math.floor(i % 3)] === charNum) return false;
//     }
//     return true
// }


// function solve(board, row, col) {
//     if (row === 9) {
//         return true
//     }
//     if (col === 9) {
//         return solve(board, row + 1, 0)
//     }

//     console.log(board)

//     if (board[row][col] === ".") {
//         for (let num = 1; num <= 9; num++) {
//             let charNum = num.toString()
//             if (isValid(board, row, col, charNum)) {
//                 board[row][col] = charNum
//                 if (solve(board, row, col + 1)) {
//                     return true
//                 } else {
//                     board[row][col] = "."
//                 }
//             }
//         }
//         return false
//     } else {
//         return solve(board, row, col + 1)
//     }
// }


// function solveSudoku(board) {
//     return solve(board, 0, 0)
// }





function isValid(board, row, col, charNum) {

    const reginRow = 3 * Math.floor(row / 3)
    const reginCol = 3 * Math.floor(col / 3)

    for (let i = 0; i < 9; i++) {
        if (board[row][i] == charNum) return false
        if (board[i][col] == charNum) return false
        if (board[reginRow + Math.floor(i / 3)][reginCol + Math.floor(i % 3)] === charNum) return false
    }
    return true
}


function solve(board, row, col) {
    if (row === 9) {
        return true
    }
    if (col === 9) {
        return solve(board, row + 1, 0)
    }

    if (board[row][col] === ".") {
        for (let num = 1; num <= 9; num++) {
            const charNum = num.toString();
            if (isValid(board, row, col, charNum)) {
                board[row][col] = charNum
                if (solve(board, row, col + 1)) {
                    return true
                } else {
                    board[row][col] = "."
                }
            }
        }
        return false
    } else {
        return solve(board, row, col + 1)
    }
}



function solveSudoku(board) {
    return solve(board, 0, 0)
}


let board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]


console.log(solveSudoku(board))