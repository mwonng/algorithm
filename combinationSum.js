/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var desc = candidates.sort((a,b)=> a-b);
    var result = []

    result = validateTarget(desc, target, [], 0);
    return result

    function validateTarget(descArr, target, res, start) {
        if (target === 0)
          return result.push(res.slice())
        for (let i=start; i<descArr.length && descArr[i] <= target; i++) {
            res.push(descArr[i])
            validateTarget(descArr, target - descArr[i], res, i)
            res.pop()
        }
        return result
    }
};



var can = [2,3,5];
var tar = 9
console.log(combinationSum(can, tar))