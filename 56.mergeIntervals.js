/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    let i = 1;
    // intervals.sort((a,b) => a.start - b.start )
    intervals.sort((a, b) => a.start !== b.start ? a.start - b.start : a.end - b.end)
    console.log(intervals);

    if (intervals.length <= 1) {
        return intervals;
    }

    while(i < intervals.length) {
        if (intervals[i].start <= intervals[i-1].end) {
            intervals[i].start = Math.min(intervals[i-1].start, intervals[i].start);
            intervals[i].end = Math.max(intervals[i-1].end, intervals[i].end);
            intervals.splice(i-1, 1);
        } else {
            i++
        }
    }
    return intervals;
};

function Interval(start, end) {
    let res = {}
    res.start = start;
    res.end = end;
    return res
}

// console.log(Interval(1,3))

console.log(merge([Interval(2,3), Interval(2,2), Interval(3,3), Interval(1,3), Interval(5,7), Interval(2,2), Interval(4,6)]));