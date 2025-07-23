var getRow = function (rowIndex) {
    let arr = [];

    for (let i = 0; i <= rowIndex; i++) {
        let row = [1];
        for (let j = 1; j < i; j++) {
            row[j] = arr[i - 1][j - 1] + arr[i - 1][j]
        }
        if (i > 0) {
            row.push(1)
        }
        arr.push(row)
    }
    return arr[rowIndex]
};



