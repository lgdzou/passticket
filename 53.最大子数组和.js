/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0]

  for (let i = 1; i < nums.length; i++) { 
    if (dp[i - 1] > 0) {
      dp[i] = dp[i - 1] + nums[i]
    } else { 
      dp[i] = nums[i]
    }
  }

  let res = dp[0];
  for (let i = 1; i < dp.length; i++) { 
    res = Math.max(res, dp[i])
  }

  return res;
};
// @lc code=end

