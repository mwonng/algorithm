function manacher(s) {
  if (s.length == 1) {
     return s
  }
  let str = '##' + s.split('').join('#') + '##'
  let rl = []
  let mx = 0
  let pos = 0
  let ml = 0
  let sub =""
  for (let i = 1; i < str.length-1; i++){
      if (i < mx) {
          rl[i] = Math.min(rl[2 * pos - i], mx - i)
      } else {
          rl[i] = 1
      }
      while (str[i - rl[i]] == str[i + rl[i]]) {
          rl[i] += 1
      }
      if (rl[i] + i > mx) {
          mx = rl[i] + i
          pos = i
      }
      if (ml < rl[i]) {
          ml = rl[i]
          sub = str.substring(i - rl[i]+1, i + rl[i])
      }
  }
  return sub.split('#').join('').trim()
}
const string = "abadd"
const longestPalindrome = manacher(string);
