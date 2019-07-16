/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let right = [0, 1];
    let bottom = [1, 0];
    let left = [0, -1];
    let top = [-1, 0];
    let directions = [right, bottom, left, top];
    let x = 0, y = 0;
    let currDirectIndex = 0;

    if (matrix.length < 0) {
        return false
    }

    if (matrix.length === 1) {
        return matrix[0];
    }

    let result = [];
    let row = matrix.length;
    let col = matrix[0].length;
    result.push(matrix[x][y]);
    matrix[x][y] = undefined;
    while (result.length < col * row) {
        while (
            (x + directions[currDirectIndex][0]) < matrix.length &&
            (x + directions[currDirectIndex][0]) >= 0 &&
            (y + directions[currDirectIndex][1]) >= 0 &&
            (y + directions[currDirectIndex][1]) < matrix[0].length &&
            matrix[x + directions[currDirectIndex][0]][y + directions[currDirectIndex][1]] !== undefined
        ) {
            x = x + directions[currDirectIndex][0];
            y = y + directions[currDirectIndex][1];
            result.push(matrix[x][y]);
            matrix[x][y] = undefined;
        }
        currDirectIndex = currDirectIndex === 3 ? 0 : currDirectIndex + 1;
    }

    return result;

};


console.log(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));

console.log([].length)