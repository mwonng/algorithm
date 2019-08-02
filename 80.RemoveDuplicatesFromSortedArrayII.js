/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let isDup = false;
    let i = 1;
    while (i < nums.length) {
        // console.log(nums[i])
        if (nums[i] === nums[i - 1]) {
            if (isDup === true) {
                nums.splice(i, 1);
                i--
            }
            isDup = true;
        } else {
            isDup = false;
        }
        i++
    }
    return nums.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]))