/**
 * 22. Leetcode
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    let openCount = 0, closeCount = 0;
    let temp = "";
    backtrack(res, n, temp, openCount, closeCount);
    return res;
};

function backtrack (res, n, temp, openCount, closeCount) {
    console.log(temp)
    if(temp.length == 2*n) {
        res.push(temp);
    }
    if (openCount < n) {
        backtrack(res, n, temp.concat("("), openCount+1, closeCount);
    }
    if (closeCount < openCount) {
        backtrack(res, n, temp.concat(")"), openCount, closeCount+1);
    }
}

console.log(generateParenthesis(3))