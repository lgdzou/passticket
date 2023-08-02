/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hash = {};

  let i = 0;
  while (i < nums.length) { 
    if (hash[target - nums[i]] !== undefined) { 
      return [i, hash[target - nums[i]]]
    }
    hash[nums[i]] = i;
    i++;
  }

  return [];
};
// @lc code=end

