/**
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 *
 *
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  var dp = [];
  var m = s.length;
  var n = p.length;

  for (var i = 0; i <= m; i++) {
      dp.push(new Array(n + 1).fill(false));
  }
  dp[0][0] = true;

  for (var i = 0; i <= m; i++) {
      for (var j = 1; j <= n; j++) {
          if (p[j - 1] === '*') {
              // isMatch('a', 'a.*')
              // 如果j-1是*, 那么j-2可以出现0次;
              // 所以可以直接看 dp[i][j-2]
              dp[i][j] = dp[i][j - 2] ||
                  // isMatch('aa', 'aa*')
                  (i > 0 && (s[i - 1] === p[j - 2] || p[j - 2] === '.') && dp[i - 1][j]);
          } else {
              dp[i][j] = i > 0 && dp[i - 1][j - 1] &&
                  (s[i - 1] === p[j - 1] || p[j - 1] === '.');
          }
      }
  }
  return dp[m][n];
};