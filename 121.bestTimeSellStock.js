/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0
    for (let i = 0 ; i < prices.length ; i ++) {
        for (let j = i ; j < prices.length ; j++) {
            if (prices[j] - prices[i] > 0) {
                max = Math.max(max, (prices[j] - prices[i]));
            }
        }
    }
    return max;
};


maxProfit([2,4,1])