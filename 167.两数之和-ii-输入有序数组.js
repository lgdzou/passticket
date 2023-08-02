/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let i = 0, j = numbers.length - 1;

  while (i < j) {
    let count = numbers[i] + numbers[j];
    if (count === target) {
      return [i + 1, j + 1]
    } else if (count < target) {
      i++
    } else if (count > target){ 
      j--
    }
  }

  return [-1, -1]
};
// @lc code=end

