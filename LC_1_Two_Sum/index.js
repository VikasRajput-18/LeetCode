

function twoSum(nums, target) {

  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];

    if (map.has(compliment)) {
      return [map.get(compliment), i]
    } else {
      map.set(nums[i], i)
    }
  }

  return false

}
console.log(twoSum([2, 7, 11, 15], 180));