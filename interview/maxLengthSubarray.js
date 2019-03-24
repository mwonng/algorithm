'use strict';
// max length subarray
// canvas interview

function maxLength(a, k) {
// Write your code here
    let sum = 0;
    let start = 0;
    let end = 0;
    let maxLength = 0

    while (start < a.length) {
        if (sum + a[end] <= k) {
            maxLength = Math.max(end - start + 1, maxLength);
            sum += a[end];
        } else {
            start++;
        }
        end++;
    }

    return maxLength;
}


console.log("start")
console.log("expect: 2, result: %s", maxLength([9, 2, 3], 5))

// console.log("expect: 2, result: %s", maxLength([9, 2, 3], 5))

console.log("expect: 2, result: %s", maxLength([9, 2, 1, 1], 2))

console.log("expect: 3, result: %s", maxLength([460, 1111, 12000, 459, 1, 2, 1], 4))
console.log("expect: 0, result: %s", maxLength([460, 1111, 12000], 459))
console.log("expect: 0, result: %s", maxLength([3342, 5345, 543, 18686, 7566, 7456, 423, 6745, 5345, 5435, 42356], 7))
console.log("expect: 100, result: %s", maxLength(Array(10**5).fill(1), 100))
