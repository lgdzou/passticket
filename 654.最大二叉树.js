/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  const build = (restNums, low, hight) => { 
    if (low > hight) {
      return null;
    }

    let maxNum = Number.MIN_SAFE_INTEGER
    let maxIndex = -1
    let i = low
    while (i <= hight) { 
      if (maxNum < restNums[i]) { 
        maxNum = restNums[i];
        maxIndex = i;
      }
      i++
    }

    let root = new TreeNode(maxNum)
    root.left = build(restNums, low, maxIndex - 1);
    root.right = build(restNums, maxIndex + 1, hight)
    
    return root
  }

  return build(nums, 0, nums.length - 1);
};
// @lc code=end

