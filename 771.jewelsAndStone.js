/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let mappedStone = {};
    let result = 0;

    for (let i = 0, len = S.length; i < len ; i++) {
        mappedStone[S[i]] = (mappedStone[S[i]] === undefined) ? 1 : mappedStone[S[i]] + 1;
    }

    for (let j = 0, len = J.length; j < len ; j++) {
        if (mappedStone[J[j]] !== undefined) {
            result = parseInt(mappedStone[J[j]], 10) + result;
        }
    }
    return result;
};

console.log(numJewelsInStones("aA","aAAbbbb"))