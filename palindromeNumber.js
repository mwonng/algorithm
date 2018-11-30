/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
      return false
  }

  let reverted = 0;

  while (x > reverted) {
    reverted = reverted * 10 + x%10;
    x = Math.floor(x/10);
  }
  // return reverted;

  return (reverted === x) || x === Math.floor(reverted/10);
};

const number = 12321;

console.log(isPalindrome(number))