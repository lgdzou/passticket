/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  let slow = 0, fast = 0;
  let maxVal = intervals[fast][1];
  let result = [];

  while (fast < intervals.length) { 
    if (fast === intervals.length - 1) { 
      result.push([
        intervals[slow][0],
        maxVal
      ])
      break;
    }
    if (maxVal >= intervals[fast + 1][0]) {
      maxVal = Math.max(maxVal, intervals[fast + 1][1])
      fast++
    } else {
      result.push([
        intervals[slow][0],
        maxVal
      ])
      fast++
      slow = fast
      maxVal = intervals[fast][1]
    }
  }

  return result;
};
// @lc code=end

