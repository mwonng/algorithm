var str = []
var findMedianSortedArrays = function(nums1, nums2) {
  med = 0;
  result = nums1.concat(nums2);
  result.sort(function(a,b){return a-b});
  leng = result.length;
  if (leng % 2 === 1) {
    med = result[Math.floor(leng/2)];
  } else {
    med = (result[Math.floor(leng/2)-1] + result[Math.floor(leng/2)])/2
  }
  return result;
};

array1=[3];
array2=[-2,-1];
console.log(findMedianSortedArrays(array1, array2));