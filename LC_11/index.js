const arr = [4,8,7, 1, 2, 3, 9];

// area = l*w
// f = Math.min(a,b) - (b[i] * a[i])

// function getArea(nums) {
//   let maxArea = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let b = i + 1; b < nums.length; b++) {
//       let height = Math.min(nums[i], nums[b]);
//       let width = b - i;
//       let area = width * height;
//       maxArea = Math.max(maxArea, area);
//     }
//   }
//   return maxArea;
// }

// const result = getArea(arr);
// console.log(result);


// optimize Code 

function  getArea(heights){
    
    let p1 = 0;
    let p2 = heights.length-1;
    let maxArea = 0;

    console.log({p1 , p2 , maxArea})

    while(p1<p2){
        console.log({p1, p2})
        const height = Math.min(heights[p1], heights[p2]);
        const width = p2 - p1;
        const area = height * width;
        maxArea = Math.max(maxArea, area);
        console.log({height , width , area , maxArea})
        if(heights[p1] <= heights[p2]){
            p1++
        }else{
            p2--
        }
    }
    return maxArea

}

const ans = getArea(arr)
console.log(ans)
