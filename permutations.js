/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [[nums.shift()]];
    console.log("nums ->", nums)
    while (nums.length) {
        let num = nums.shift();
        console.log("num ->",num)
        console.log("res ->", res)
        let temp = [];

        for (let i = 0; i < res.length; i++) {
            let len = res[i].length;
            for (let j = 0; j <= len; j++) {
                let cur = res[i].slice();
                cur.splice(j, 0, num)
                temp.push(cur);
            }
        }
        res = temp;
        console.log("res ->", res)
    }
    return res;
};

var nums = [1,2,3,4]
console.log(permute(nums))