/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let res = n - 1;
    let arr = [];
    let result = [];
    for (let i = 0; i < n; i++) {
        arr.push(i + 1);
    }

    while (res > 0) {
        pos = Math.floor(k / factorial(res));
        k = k % factorial(res);
        if (k > 0) {
            result.push(arr[pos]);
            arr.splice(pos, 1);
        } else {
            console.log(arr);
            let index = pos - 1 >= 0 ? pos - 1 : pos - 1 + arr.length;
            result.push(arr[index]);
            arr.splice(index, 1);
        }
        res--;
        console.log(`pos->${pos}, k=>${k}`);
    }
    result.push(arr[0]);
    console.log(result);
    return result.join('');
};


var factorial = function (n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("Result", getPermutation(4, 6));