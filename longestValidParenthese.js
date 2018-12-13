/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var left= 0, right= 0;
    var maxLength=0;
    for (let i=0; i < s.length; i++) {
        if (s[i] === "(") {
            left++;
        } else {
            right++;
        }
        console.log("left",left);
        console.log("right",right);

        if (left === right) {
            maxLength = Math.max(left + right,maxLength);
        } else if (right >= left) {
            left = 0;
            right = 0;
        }
        console.log(maxLength);
        console.log("-----------");
    }

    // from right to left
    left= 0;
    right= 0;
    maxLength=0;
    for (let i=s.length - 1; i >= 0; i--) {
        if (s[i] === "(") {
            left++;
        } else {
            right++;
        }
        // console.log("left",left);
        // console.log("right",right);

        if (left === right) {
            maxLength = Math.max(left + right,maxLength);
        } else if (left >= right) {
            left = 0;
            right = 0;
        }
        // console.log(maxLength);
        // console.log("-----------");
    }
    return maxLength
};




var string= ")()())"

console.log(longestValidParentheses(string))