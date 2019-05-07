/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let leng = nums.length;
    let fromLeft=[], fromRight=[];
    let result = [];
    for (let i=0; i<leng ; i++) {
        if (nums[i-1] === undefined) {
            fromLeft[i] = 1
        } else {
            fromLeft[i] = fromLeft[i-1] * nums[i-1];
        }
    }
    for (let i=leng-1; i>=0 ; i--) {
        if (nums[i+1] === undefined) {
            fromRight[i] = 1;
        } else {
            fromRight[i] = fromRight[i+1] * nums[i+1];
        }


    }
    for (let i=0; i<leng ; i++) {
        result[i] = fromLeft[i] * fromRight[i];
    }

    return result;
};

console.log(productExceptSelf([0,0]));