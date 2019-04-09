/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = [];
    for(let i = 0, len = n ; i < len ; i++) {
        switch (true) {
            case ((i+1) % 15 === 0) :
                result.push('FizzBuzz');
                break;
            case ((i+1) % 3 === 0) :
                result.push('Fizz');
                break;
            case ((i+1) % 5 === 0) :
                result.push('Buzz');
                break;
            default :
                result.push((i+1).toString());
        }
    }
    return result;
};

console.log(fizzBuzz(15));