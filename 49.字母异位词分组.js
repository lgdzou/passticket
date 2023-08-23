/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const hash = new Map()
  const result = [];

  strs.forEach(str => {
    let strSorted = str.split('');
    strSorted = strSorted.sort().join('');
    if (hash.has(strSorted)) {
      const newVal = [...hash.get(strSorted), str]
      hash.set(strSorted, newVal)
    } else { 
      hash.set(strSorted, [str])
    }
  })

  hash.forEach(i => { 
    result.push(i)
  })

  return result;
};
// @lc code=end

