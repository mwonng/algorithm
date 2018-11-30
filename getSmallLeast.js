// you can write to stdout for debugging purposes, e.g.
// get the least biggest integer not in array
//

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  // if (x > 1000000) {
  //      over
  // }

  var compare = 1;
  A.sort(function (a,b) {return a-b});
  for (let i=0; i< A.length; i++) {
    if (A[i] === compare) {
      compare = A[i]+1;
    }
  }
  return compare;

}

var array = [-1,-3,-6,-1,-2];
console.log(solution(array))