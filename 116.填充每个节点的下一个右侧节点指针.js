/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) return null;

  const traverse = (leftRoot, rightRoot) => {
    if (leftRoot === null || rightRoot === null) return;

    leftRoot.next = rightRoot;
    
    traverse(leftRoot.left, leftRoot.right);
    traverse(leftRoot.right, rightRoot.left);
    traverse(rightRoot.left, rightRoot.right);
  }

  traverse(root.left, root.right);
  return root;
};
// @lc code=end

