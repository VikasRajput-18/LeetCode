

// var maxProfit = function (prices) {
//     let maxProfit = 0;
//     let cheapestPrice = prices[0]

//     for(let i = 0; i < prices.length; i++) {
//         const price = prices[i]
//         if(price < cheapestPrice){
//             cheapestPrice = price
//         }
//         let currentProfit = price - cheapestPrice
//         maxProfit = Math.max(currentProfit , maxProfit)

//     }
//     return maxProfit
// };





function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        const sum = prices[i] - minPrice

        maxProfit = Math.max(sum, maxProfit)
        minPrice = Math.min(prices[i], minPrice)

    }
    return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
