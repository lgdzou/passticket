/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  let temp = new Array(nums.length);

  const merge = (nums, lo, mid, hi) => { 
    for (let i = lo; i <= hi; i++) { 
      temp[i] = nums[i]
    }

    let i = lo, j = mid + 1;
    for (let p = lo; p <= hi; p++) { 
      if (i === mid + 1) {
        nums[p] = temp[j++]
      } else if (j === hi + 1) {
        nums[p] = temp[i++]
      } else if (temp[i] > temp[j]) {
        nums[p] = temp[j++]
      } else { 
        nums[p] = temp[i++]
      }
    }
  }

  const sort = (nums, lo, hi) => { 
    if (lo >= hi) { 
      return; 
    }
    let mid = lo + Math.floor((hi - lo) / 2);
    sort(nums, lo, mid);
    sort(nums, mid + 1, hi);
    merge(nums, lo, mid, hi);
  }

  sort(nums, 0, nums.length - 1);

  return nums;
};
// @lc code=end

