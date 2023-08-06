/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) { 
    const point = low + Math.floor((high - low) / 2);
    if (nums[point] < nums[high]) {
      high = point
    } else { 
      low = point + 1
    }
  }

  return nums[low]
};
// @lc code=end

