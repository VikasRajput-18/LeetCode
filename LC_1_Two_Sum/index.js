
const arr = [1,20,40,10,15,28,18,90,77];
const targetNum = 43;

// function twoSum(nums , target){

// for(let i=0 ; i<nums.length;i++){
//     const numToFind = target - nums[i];
//    for(let j =i+1; j<nums.length; j++){
//     if(numToFind === nums[j]){
//         return [i,j]
//     }
//    }
// }
// return null

// }

// console.log(twoSum(arr, targetNum));



// optimize code  0(n)


// function twoSum(nums, target) {
//   const newMap = {};
//   for(let i = 0; i<nums.length; i++){
//     const currentVal = newMap[nums[i]];
//     if(currentVal >= 0){
//         return [currentVal , i]
//     }else{
//         const numberToFind = target - nums[i];
//           newMap[numberToFind] = i   
//         }

//   }
//   return false
// }


function twoSum(nums , target){
  let visitedNum = {};
  const res = [];

  for(let i = 0; i < nums.length;i++){
    let num = arr[i];
    const complement = target - num;

    if(visitedNum[complement] !== undefined){
      res.push(i)
      res.push(visitedNum[complement]);
    }
    visitedNum[num] = i

  }
  return res
}
console.log(twoSum(arr, targetNum));