function solution(A) {
    let sums = new Array(A.length + 1);
	let minAbsSum = Number.MAX_SAFE_INTEGER;

	sums[0] = 0;

	for (var i = 0; i < A.length; i++) {
		sums[i + 1] = A[i] + sums[i];
	}
	sums.sort();

	// sums=sums.sort(function(a,b){return a-b});
	console.log(sums);
	for (var i = 1; i < sums.length; i++) {
		minAbsSum = Math.min(minAbsSum, Math.abs(sums[i] - sums[i - 1]));
	}
    return minAbsSum;
}
// console.log(Number.MAX_SAFE_INTEGER);
console.log(solution([2, -4, 6, -3, 9]))
console.log(solution([10, 10, 10, 10, 10, -50]))
console.log(solution([14,-4,5]))
console.log(solution([0,-141232,-4,51231,-12310]))