/**
* @param {string} a
* @param {string} b
* @return {string}
*/
var addBinary = function (a, b) {
    let leng = Math.max(a.length, b.length);
    let aleng = a.length;
    let bleng = b.length;

    let i = 0, carry = 0;
    let result = []
    while (i <= leng - 1 || carry > 0) {
        let abit = parseInt(a[aleng - i - 1], 10) || 0;
        let bbit = parseInt(b[bleng - i - 1], 10) || 0;
        let current = (abit + bbit + carry) % 2;
        carry = (abit + bbit + carry) > 1 ? 1 : 0;
        result[i] = current;
        i++
    }
    return result.reverse().join('');
};

console.log(addBinary('11', '1'));