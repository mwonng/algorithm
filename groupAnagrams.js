/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let strsCopy = strs.slice();
    let anagrams = {};
    strsCopy = strsCopy.map(str => str.split('').sort().join(''));

    for (let i = 0; i < strsCopy.length; i++) {
        const cur = strsCopy[i];

        if (anagrams[cur] === undefined) {
            anagrams[cur] = [];
            anagrams[cur].push(strs[i])
        } else {
            anagrams[cur].push(strs[i])
        }

    }
    var result = Object.keys(anagrams).map( key => anagrams[key])
    return result;
};


var strs = ["eat","tea","tan","ate","nat","bat"]
// console.log(getAsciiSum("a"));


console.log(groupAnagrams(strs));
// console.log(getSortedString("bdca"));
