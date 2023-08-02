/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const palindrome = (str, l, r) => { 
    while (l >= 0 && r < str.length && str[l] === str[r]) { 
      l--;
      r++;
    }
    return str.substring(l + 1, r);
  }

  let i = 0;
  let res = '';
  while (i < s.length) { 
    let s1 = palindrome(s, i, i)
    let s2 = palindrome(s, i, i + 1)
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
    i++
  }

  return res;
};
// @lc code=end

