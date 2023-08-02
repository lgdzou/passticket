/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
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
  const findNext = (node) => {
    while (node !== null && node.left === null && node.right === null) node = node.next;
    if (node === null) return null;
    return node.left || node.right;
  }

  if (root === null) return root;
  if (root.left !== null && root.right !== null) {
    root.left.next = root.right;
  }
  if (root.left !== null && root.right === null) {
    root.left.next = findNext(root.next);
  }
  if (root.right !== null) root.right.next = findNext(root.next);
  
  connect(root.right);
  connect(root.left);
  return root;
};
// @lc code=end