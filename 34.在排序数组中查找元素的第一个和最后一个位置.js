/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const search = (nums, target, isLeft) => { 
    let low = 0;
    let high = nums.length - 1;
    let res = -1;

    while (low <= high) { 
      let point = low + Math.floor((high - low) / 2);
      if (nums[point] === target) {
        res = point;
        if (isLeft) {
          high = point - 1
        } else { 
          low = point + 1
        }
      } else if (nums[point] < target) {
        low = point + 1
      } else if (nums[point] > target) { 
        high = point - 1
      }
    }

    return res;
  }

  let left = search(nums, target, true)
  let right = search(nums, target, false)
  
  return [left, right]
};
// @lc code=end

