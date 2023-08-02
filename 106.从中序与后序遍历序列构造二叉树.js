/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  const build = (
    _inorder, iStart, iEnd,
    _preorder, pStart, pEnd
  ) => { 
    if (iStart > iEnd) return null;

    let rootVal = _preorder[pEnd];

    let rootIndex = 0;
    let i = iStart;
    while (i <= iEnd) { 
      if (_inorder[i] === rootVal) { 
        rootIndex = i;
        break;
      }
      i++;
    }

    let leftLen = rootIndex - iStart;
    let root = new TreeNode(rootVal);

    root.left = build(
      _inorder, iStart, rootIndex - 1,
      _preorder, pStart, pStart + leftLen - 1,
    );
    root.right = build(
      _inorder, rootIndex + 1, iEnd,
      _preorder, pStart + leftLen, pEnd - 1
    );

    return root;
  }

  return build(
    inorder, 0, inorder.length - 1,
    postorder, 0, postorder.length - 1
  )
};
// @lc code=end

