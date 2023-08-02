/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b);

  let result = []
  let i = 0;
  while (i < nums.length) { 
    if (nums[i] > 0) return result;
    if (i > 0 && nums[i] === nums[i - 1]) { 
      i++
      continue
    };

    let sideNum = 0 - nums[i];
    let x = i + 1, y = nums.length - 1;
    while (x < y) {
      let sum = nums[x] + nums[y]
      if (sum === sideNum) {
        result.push([nums[i], nums[x], nums[y]])
        while (x < y && nums[x] === nums[x + 1]) { 
          x++
        }
        while (x < y && nums[y] === nums[y - 1]) { 
          y--
        }
        x++
        y--
      }
      if (sum < sideNum) x++
      if (sum > sideNum) y--
    }

    i++
  }

  return result;
};
// @lc code=end

