
var reverse = function(x) {
  str = x.toString();
  length = str.length;

  neg = x>=0? false: true;

  var newStr = []
  for (let i=0; i<length/2; i++) {
    tmp = str[i]
    newStr[length-i-1] = tmp;
    newStr[i] = str[length-i-1]
  }

  result = neg? parseInt( "-" + newStr.join(""), 10) : parseInt(newStr.join(""), 10)
  return result;
};

console.log(reverse(1534236469));