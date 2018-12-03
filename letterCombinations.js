/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

    digits = digits + '';
    let letterList = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    let result = [];

    for (var i = 0; i < digits.length; i++) {
        let num = digits[i];
        let letter = letterList[num];
        if (result == "") {
            result = letterList[num];
        } else {
            let list = [];
            for (var j = 0; j < result.length; j++) {
                for (var k = 0; k < letter.length; k++) {
                    list.push(result[j] + letter[k]);
                }
            }

            result = list;
        }
    }
    return result;
};


console.log(letterCombinations("90"))