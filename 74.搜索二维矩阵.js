/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let left = 0; 
  let right = matrix.length - 1;
  let targetArr = [];

  const n = matrix.length - 1;
  const m = matrix[0].length - 1;

  while (left <= right) { 
    let mid = left + Math.floor((right - left) / 2);
    let minVal = matrix[mid][0]
    let maxVal = matrix[mid][m]
    if (minVal === target || maxVal === target) {
      return true
    } else if (matrix[mid][0] < target && matrix[mid][m] > target) {
      targetArr = matrix[mid];
      break;
    } else if (matrix[mid][0] > target) {
      right = mid - 1
    } else if (matrix[mid][m] < target) { 
      left = mid + 1
    }
  }

  if (!targetArr.length) return false;

  left = 0;
  right = m;

  while (left <= right) { 
    let mid = left + Math.floor((right - left) / 2);
    if (targetArr[mid] === target) {
      return true
    } else if (targetArr[mid] > target) {
      right = mid - 1
    } else if (targetArr[mid] < target) { 
      left = mid + 1
    }
  }

  return false
};
// @lc code=end

