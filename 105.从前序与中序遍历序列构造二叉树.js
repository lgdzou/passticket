/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const build = (
    _preorder, pStart, pEnd,
    _inorder, iStart, iEnd
  ) => { 
    if (pStart > pEnd) return null;

    const rootVal = preorder[pStart];

    let i = 0;
    let rootIndex = 0;
    while (i < _inorder.length) { 
      if (_inorder[i] === rootVal) { 
        rootIndex = i;
        break;
      }
      i++
    }

    const leftLen = rootIndex - iStart

    const root = new TreeNode(rootVal);
    root.left = build(
      _preorder, pStart + 1, pStart + leftLen,
      _inorder, iStart, rootIndex - 1
    );
    root.right = build(
      _preorder, pStart + leftLen + 1, pEnd,
      _inorder, rootIndex + 1, iEnd
    );

    return root;
  }

  return build(
    preorder, 0, preorder.length - 1,
    inorder, 0, inorder.length - 1
  )
};
// @lc code=end

