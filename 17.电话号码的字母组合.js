/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === '') return [];
  let nums = [
    [],
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z'],
  ]

  let result = nums[digits[0]];
  let i = 1;
  while (i < digits.length) { 
    let temp = []
    nums[digits[i]].forEach(str => {
      temp = temp.concat(result.map(j => `${j}${str}`))
    })
    result = temp
    i++
  }

  return result;
};
// @lc code=end

