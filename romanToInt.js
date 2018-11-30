/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    strArray = [...s];
    symbol = ["I","V","X","L","C","D","M"];
    value = [1,5,10,50,100,500,1000];
    deduceSym = ["IV","IX","XL","XC","CD","CM"];
    deduceValue = [4,9,40,90,400,900];

    result = 0;

    deduceSym.forEach( (dSym,i) => {
        if (s.indexOf(dSym)>=0) {
            // console.log("runs here")
            result += deduceValue[i];
            strArray.splice(s.indexOf(dSym), dSym.length);
        }
    })

    symbol.forEach((sym,i) => {
        if (strArray.indexOf(sym)>=0) {
            let times = dupInArray(strArray, sym)
            result += value[i] * times;
            strArray.splice(strArray.indexOf(sym),1);
        }
    })

    return result;

};

function dupInArray(arr, element) {
    dupArray = arr.filter( el => el === element);
    return dupArray.length
}

roman = "MCMXCIV";
console.log(romanToInt(roman))