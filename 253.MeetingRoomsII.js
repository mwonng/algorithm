/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if (intervals.length === 1) return 1;

    let max=0, min=10000, result=0;
    for (let i=0, leng = intervals.length; i<leng; i++) {
        max = Math.max(max, intervals[i][1]);
        min = Math.min(min, intervals[i][0]);
    }
    for (let i=min; i<=max; i++) {
        let count = 0
        for (let j=0, leng = intervals.length; j<leng; j++) {
           if (intervals[j][0] <= i && intervals[j][1] > i) {
               count++;
           }
       }
        result = Math.max(result,count);
    }
    return result;
};

// console.log(minMeetingRooms([[0,30],[5,10],[15,20]]))
console.log(minMeetingRooms([[1,5],[8,9],[8,9]]))