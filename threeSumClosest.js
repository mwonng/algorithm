/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let sorted = nums.sort((a,b) => a-b);
    console.log(sorted);
    if (nums.length < 3) {
        return 0
    }

    if (nums.length === 3) {
        return nums[0] + nums[1] + nums[2]
    }

    if (nums.length > 3) {
        let closestValue=Number.MAX_SAFE_INTEGER;

        for(pos=1; pos< nums.length - 1; pos++ ) {
            let leftPoint = pos-1;
            let rightPoint = pos+1;
            while (leftPoint>=0 && rightPoint< nums.length) {
                let posSum = sorted[pos] + sorted[leftPoint] + sorted[rightPoint];
                console.log("posSum",posSum);
                closestValue = Math.abs(posSum-target) < Math.abs(closestValue-target)? posSum:closestValue;

                // if posSum < target, right point move right
                if (posSum < target) {
                    rightPoint++;
                }

                // if posSum > target, left point move left
                if (posSum > target) {
                    leftPoint--;
                }

                if (posSum === target) {
                    return posSum;
                }
            }
        }

        return closestValue;
    }
};

var nums = [-1, 2, 1, -4];
var target = 1;
console.log(threeSumClosest(nums, target));