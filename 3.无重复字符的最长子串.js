/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s === ' ') return 1;
  let hash = {}
  let len = 0
  let maxLen = 0
  let sArr = s.split('')

  let i = 0, j = 0;
  while (j < sArr.length) { 
    if (hash[sArr[j]] !== undefined) {
      maxLen = Math.max(len, maxLen)
      len--
      hash[sArr[i]] = undefined
      i++
    } else { 
      hash[sArr[j]] = j
      j++
      len++
    }
  }

  maxLen = Math.max(len, maxLen)

  return maxLen
};
// @lc code=end

