

// function isDuplicate(nums){
//     const visitedNums = [];

//     for(let i = 0 ; i <nums.length;i++){
//         const num = nums[i]
//         if(visitedNums.includes(num)){
//             return true
//         }else{
//             visitedNums[i]= num
//         }
//     }
//     return false
// }

console.log(isDuplicate([1,2,2]));


var containsDuplicate = function (nums) {
  const visitedNums = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (visitedNums[num]) {
      return true;
    } else {
      visitedNums[num] = true;
    }
  }
  return false;
};