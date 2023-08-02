/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s) return true;

  const sideStr = (str) => { 
    switch (str) {
      case '(':
        return ')'
      case '{':
        return '}'
      case '[':
        return ']'
    }
  }

  let sArr = s.split('');
  let i = 0;
  let res = [];
  while (i < sArr.length) {
    res.push(sArr[i])
    let len = res.length
    if (res[len - 1] === sideStr(res[len - 2])) {
      res = res.slice(0, -2);
    }
    i++
  }

  return res.length ? false : true
};
// @lc code=end

