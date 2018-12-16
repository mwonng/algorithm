/**
 * 48. leetcode
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var length = matrix[0].length;
    for ( i=0; i< length-1; i++) {
        console.log("loop in i")
        for (j=i; j< length-i-1; j++) {
            // console.log("%s -> %s",matrix[i][j], matrix[j][length-i-1])
            // console.log(matrix[j][length-i-1])
            var temp = matrix[i][j];
            console.log("i->%s,j->%s", i, j)
            console.log("temp ->", temp)
            console.log("matrix[i][j] -> %s = matrix[length-j-1][i] -> %s", matrix[i][j], matrix[length-j-1][i])
            matrix[i][j] = matrix[length-j-1][i];
            console.log("matrix[length-j-1][i] -> %s = matrix[length-1][length-j-1] -> %s", matrix[length-j-1][i], matrix[length-1][length-j-1])
            matrix[length-j-1][i] = matrix[length-i-1][length-j-1];
            console.log("matrix[length-1][length-j-1] -> %s = matrix[j][length-1] -> %s", matrix[length-1][length-j-1], matrix[j][length-1])
            matrix[length-i-1][length-j-1] = matrix[j][length-i-1];
            console.log("matrix[j][length-1] -> %s = temp -> %s", matrix[j][length-1], temp)
            matrix[j][length-i-1] = temp;
            // console.log("matrix -> ", matrix)
        }
    }
    return matrix
};

var mar=[
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
  ];
console.log(rotate(mar));