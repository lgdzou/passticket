/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0;
  let j = height.length - 1;
  let maxSize = 0;

  while (i < j) { 
    size = Math.min(height[i], height[j]) * (j - i)
    maxSize = Math.max(size, maxSize)
    if (height[i] < height[j]) {
      i++
    } else { 
      j--
    }
  }

  return maxSize
};
// @lc code=end

