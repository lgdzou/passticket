/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let track = []
  let resList = []

  const backTrack = (candidates, target, track, begin) => { 
    if (resList.length > 150 || target < 0) return;
    if (target === 0) { 
      resList.push([...track])
      return;
    }

    for (let i = begin; i < candidates.length; i++) { 
      track.push(candidates[i]);
      backTrack(candidates, target - candidates[i], track, i)
      track.pop()
    }
  }

  backTrack(candidates, target, track, 0);
  return resList;
};
// @lc code=end

