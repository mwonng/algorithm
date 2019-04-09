/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0], val = 0
    nums.forEach(num => {
        maxSum = Math.max(maxSum, val += num)
        val = Math.max(val, 0)
    })
    return maxSum
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));