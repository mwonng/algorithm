/**
 * @param {number} numRows
 * @return {number[][]}
 */

var getRow = function(rowIndex) {
  let res = []
  res.push(1);
  for (i=1; i<= rowIndex; i++) {
      for (j=i-1; j>= 1; j--) {
        console.log("res[j] -> %s, res[j-1] -> %s", res[j], res[j-1])
        res[j] = res[j]+res[j-1]
        console.log("i -> %s, j -> %s, new res[j] -> %s", i, j, res[j]);
        console.log("-----------")
      }
      res.push(1);
  }
  return res
};

console.log(getRow(5));
