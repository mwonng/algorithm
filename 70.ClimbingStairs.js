/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let a = b = 1;
    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b];
    }
    return a
};

let cases = [
    1, 2, 3, 4, 5, 6, 7, 8
]

cases.forEach(c => {
    console.log(`${c} ->`, climbStairs(c))
}
)



// 1 1 1 1 1 1
// 1 1 1 1 2  - 5
// 1 1 2 2 - 6  1122 1212 2112 1221 2121 2211
// 2 2 2 - 1