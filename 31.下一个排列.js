/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length === 2) { 
    const temp = nums[0]
    nums[0] = nums[1]
    nums[1] = temp
    return nums;
  }

  let i = nums.length - 2;
  let j = nums.length - 1;
  let k = nums.length - 1;

  while (i >= 0) { 
    if (nums[i] < nums[j]) { 
      break;
    } 
    i--
    j--
  }

  if (i <= 0 && nums[i] >= nums[j]) { 
    return nums.sort()
  }

  while (k >= j) {
    if (nums[k] > nums[i]) { 
      break;
    }
    k--
  }

  const temp = nums[i]
  nums[i] = nums[k]
  nums[k] = temp

  let l = nums.length - 1
  while (j <= l ) { 
    const temp = nums[j]
    nums[j] = nums[l]
    nums[l] = temp
    j++
    l--
  }
  
  return nums;
};
// @lc code=end

