
function solution(A) {
    var n = A.length;
    var L = new Array(n + 1);
    L[0] = -1;
    var i;
    for (i = 0; i < n; i++) {
        L[i + 1] = A[i];
    }
    // L = L.sort(function(a,b){return a-b;})
    var count = 0;
    var pos = Math.floor((n + 1) / 2);
    candidate = L[pos];
    for (i = 1; i <= n; i++) {
        if (L[i] === candidate)
            count = count + 1;
    }
    if (count > pos)
        return candidate;
    return (-1);
}

// var array = [1,1,1,50];
var array = [0,0,1]
console.log(solution(array))