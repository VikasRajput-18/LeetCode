var permuteUnique = function (nums) {
    const result = [];

    function backtrack(i) {
        if (i === nums.length) {
            result.push([...nums]);
            return;
        }

        for (let j = i; j < nums.length; j++) {
            swap(nums, i, j)
            backtrack(i + 1)
            swap(nums, i, j)
        }
    }

    backtrack(0);

    let uniqueArr = []
    let seen = new Set();

    for (let subArr of result) {
        let key = JSON.stringify(subArr);

        if (!seen.has(key)) {
            seen.add(key)
            uniqueArr.push(subArr)
        }
    }

    return uniqueArr;
};


function swap(arr, start, end) {
    [arr[end], arr[start]] = [arr[start], arr[end]];
}


console.log(permuteUnique([1, 1, 2]))




let arr = [1, 2, 3]

console.log(arr.includes(1))