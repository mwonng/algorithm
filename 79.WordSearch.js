/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let row = board.length,
        col = board[0].length,
        w = word.length;

    const next = (i, j, c) => {
        return c >= w ||
            match(i - 1, j, c) ||
            match(i, j + 1, c) ||
            match(i + 1, j, c) ||
            match(i, j - 1, c)
    }

    function match(i, j, indexOfWord) {
        let isExist = false;
        if (i >= 0 && i < row && j >=0 && j < col) {
            if (board[i][j] === word[indexOfWord]) {
                let tmp = word[indexOfWord];
                board[i][j] = true;
                if (next(i, j, indexOfWord +1)) isExist = true;
                board[i][j] = tmp;
            }
        }
        return isExist;
    }


    for (let i=0 ; i < row ; i ++) {
        for (let j=0 ; j < col ; j ++) {
            if (match(i, j, 0)) return true
        }
    }

    return false
};



console.log(
    exist(
        [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
        "ABCCED"
    )
)
console.log(
    exist(
        [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
        "SEE"
    )
)
console.log(
    exist(
        [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
        "ABCB"
    )
)
console.log(
    exist(
        [["F","Y","C","E","N","R","D"],["K","L","N","F","I","N","U"],["A","A","A","R","A","H","R"],["N","D","K","L","P","N","E"],["A","L","A","N","S","A","P"],["O","O","G","O","T","P","N"],["H","P","O","L","A","N","O"]],
        "poland"
    )
)

console.log(
    exist(
        [
            ["A","B","C","E"],
            ["S","F","E","S"],
            ["A","D","E","E"]
        ],
        "ABCESEEEFS"
    )
)