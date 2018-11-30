/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let reg = [
        {
            "symbol": "I",
            "value": 1
        },
        {
            "symbol": "V",
            "value": 5
        },
        {
            "symbol": "X",
            "value": 10
        },
        {
            "symbol": "L",
            "value": 50
        },
        {
            "symbol": "C",
            "value": 100
        },
        {
            "symbol": "D",
            "value": 500
        },
        {
            "symbol": "M",
            "value": 1000
        },
    ]
    str = "";
    times = Math.pow(10, (num.toString().length - 1))
    while (num > 0 && num < 4000) {

        str = str + convertRomaon(num, times, reg);
        num = Math.floor(num%times);
        times = Math.floor(times/10);
    }
    return str;
};

function convertRomaon(num, times, reg) {
    let five = reg.filter(arr => arr.value === 5*times)[0];
    let one = reg.filter(arr => arr.value === times)[0];
    let ten = reg.filter(arr => arr.value === 10*times)[0];
    let result = "";
    let firstDigit = Math.floor(num/times);

    if (firstDigit*times === Math.floor(9*times)) {
        result = one.symbol + ten.symbol;
    } else if (firstDigit*times === Math.floor(4*times)) {
        result = one.symbol + five.symbol;
    } else {
        if (num >= 5*times ) {
            result = result + five.symbol;
        }
        for (i=0; i < Math.floor(num % (5*times) / (one.value)); i++) {
            result = result + one.symbol;
        }
    }
    return result
}

number = 1994;
console.log("input ->", number)
console.log(intToRoman(number))