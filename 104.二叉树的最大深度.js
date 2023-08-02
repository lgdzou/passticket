/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  let depth = Math.max(left, right) + 1;
  return depth;
};

// let depth = 0;
// let res = 0;

// var maxDepth = function(root) {
//   traverse(root);
//   return res;
// };

// var traverse = function (root) { 
//   if (root === null) return;

//   depth++
//   if (root.left === null && root.right === null) { 
//     res = Math.max(res, depth);
//   }
//   traverse(root.left);
//   traverse(root.right);
  
//   depth--
// }
// @lc code=end

