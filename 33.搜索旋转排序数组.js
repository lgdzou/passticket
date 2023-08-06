/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length <= 3) { 
    return nums.findIndex(i => i == target)
  }
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
  
    return low
  };

  const minIndex = findMin(nums);

  let low = target >= nums[0] ? 0 : minIndex;
  let high = (target >= nums[0] && minIndex > 0) ? minIndex - 1 : nums.length - 1;

  while (low < high) { 
    const point = low + Math.floor((high - low) / 2);
    console.log(low, high, nums[point], target)
    if (nums[point] < target) {
      low = point + 1
    } else { 
      high = point
    }
  }

  return nums[low] === target ? low : -1
};
// @lc code=end

