/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let len = nums.length;
  if (len < 2) return len;

  let dp = new Array(nums.length).fill(1)
  
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) { 
      if (nums[j] < nums[i]) { 
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  let res = 0;
  for (let i = 0; i < dp.length; i++) { 
    res = Math.max(res, dp[i])
  }

  return res;
};

// 使用贪心优化
// @lc code=end
