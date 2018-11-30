var myAtoi = function(str) {
  var reg = /^[\-|\+]?\d+/g ;
  console.log(str)

  var found = str.trim().match(reg);
  console.log(found)
  if (found) {
      result = parseInt(found[0], 10)
  } else {
      result = 0
  }

  if (result >= Math.pow(2,31) ) {
      result = Math.pow(2,32) - 1
  }

  if (result < (0 - Math.pow(2,31)) ) {
      result = (0 - Math.pow(2,31))
  }

  return result
};


const string = "+1";
console.log(myAtoi(string))