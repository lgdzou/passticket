/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  let sum = 0;
  const max_left = new Array(height.length).fill(0);
  const max_right = new Array(height.length).fill(0);

  for (let i = 1; i < height.length - 1; i++) {
    max_left[i] = Math.max(max_left[i - 1], height[i - 1]);
  }
  for (let i = height.length - 2; i >= 0; i--) {
    max_right[i] = Math.max(max_right[i + 1], height[i + 1]);
  }
  for (let i = 1; i < height.length - 1; i++) {
    const min = Math.min(max_left[i], max_right[i]);
    if (min > height[i]) {
      sum += (min - height[i]);
    }
  }
  return sum;
}
// @lc code=end