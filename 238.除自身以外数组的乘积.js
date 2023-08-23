/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let L = [], R = [], result = [];

  for (let i = 0; i < nums.length; i++) {
    let temp = L[L.length - 1] !== undefined ? L[L.length - 1] : 1
    L.push(nums[i] * temp)
  }

  for (let i = nums.length - 1; i >= 0; i--) { 
    let temp = R[0] !== undefined ? R[0] : 1
    R.unshift(nums[i] * temp)
  }

  for (let i = 0; i < nums.length; i++) { 
    let left = L[i - 1] !== undefined ? L[i - 1] : 1
    let right = R[i + 1] !== undefined ? R[i + 1] : 1
    result.push(left * right)
  }

  return result;
};
// @lc code=end

