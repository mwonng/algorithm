/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  r = height.length-1;
  l = 0;
  area = l*r;
  while ( l < r) {
    area = Math.max(area, Math.min(height[l],height[r]) * (r-l) );
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return area;
};

const height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height))