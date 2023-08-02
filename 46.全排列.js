/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let track = [];
  let used = new Array(nums.length).fill(false);

  const backtrack = function (nums, track, used) {
    if (track.length === nums.length) {
      res.push([...track]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        // nums[i] 已经在 track 中，跳过
        continue;
      }
      // 做选择
      track.push(nums[i]);
      used[i] = true;
      backtrack(nums, track, used);
      // 取消选择
      track.pop();
      used[i] = false;
    }
  }

  backtrack(nums, track, used);
  return res;
};
// @lc code=end