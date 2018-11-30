/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let first = strs[0];
    let position = 0;
    let match = true;
    let result = ""
    while (position < strs[0].length && match ) {
        // console.log("position->",position)
        for (let i = 1; i< strs.length; i++) {
            compare = strs[i]
            console.log("first-> %s, compare-> %s",first[position],compare[position])
            match = match && first[position] === compare[position]
        }
        if (match) {
            result += first[position]
        }
        position++;
    }
    return result;
};


input= ["flower","flow","flight"] ;
// console.log("input->", input);
// console.log(longestCommonPrefix(input))