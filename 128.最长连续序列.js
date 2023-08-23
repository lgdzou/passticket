/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const hash = new Set(nums)
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    if (!hash.has(val - 1)) {
      let currentLen = 1
      while (hash.has(val + 1)) { 
        val++
        currentLen++
      }

      maxLen = Math.max(currentLen, maxLen)
    }
  }
  
  return maxLen;
};
// @lc code=end

