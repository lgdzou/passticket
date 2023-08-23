/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k === 0) return nums;
  
  let minK = k % nums.length
  const nextStep = (nums) => { 
    let temp = nums[0]
    for (let i = 0; i < nums.length; i++) { 
      if (i === 0) {
        nums[i] = nums[nums.length - 1]
      } else { 
        let temp2 = nums[i]
        nums[i] = temp
        temp = temp2
      }
    }
  }

  while (minK > 0) { 
    nextStep(nums)
    minK--
  }

  return nums;
};
  // @lc code=end

