/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let res = []
  let track = []

  const backTrack = (start) => { 
    res.push([...track])

    for (let i = start; i < nums.length; i++) { 
      track.push(nums[i]);
      backTrack(i + 1)
      track.pop()
    }
  }

  backTrack(0)
  return res
};
// @lc code=end

