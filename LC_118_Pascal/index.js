

var generate = function (numRows) {
    let arr = [];

    for (let i = 0; i < numRows; i++) {
        let row = [1];
        for (let j = 1; j < i; j++) {
            row[j] = arr[i - 1][j - 1] + arr[i - 1][j]
        }
        if (i > 0) {
            row.push(1)
        }
        arr.push(row)
    }
    return arr
};

