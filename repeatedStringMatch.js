/**
 * LeetCode
 * 686. Repeated String Match
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  var n = Math.ceil(B.length / A.length);
    var str = "";
    for(var i = 1; i<n+2; i++){
        str += A;
        if(str.indexOf(B)>=0){
           return i;
        }
    }
    return -1;
};

console.log("expect -> 2, result -> %s", repeatedStringMatch("aaaaaaaaaaaaaaaaaaaaaab", "ba"))
console.log("expect -> 3, result -> %s", repeatedStringMatch("abcd", "cdabcdab"))
console.log("expect -> 3, result -> %s", repeatedStringMatch("ab", "ababababababababababa"))