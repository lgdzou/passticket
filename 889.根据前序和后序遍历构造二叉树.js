/*
 * @lc app=leetcode.cn id=889 lang=javascript
 *
 * [889] 根据前序和后序遍历构造二叉树
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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
  const build = (
    _preorder, preStart, preEnd,
    _postorder, postStart, postEnd
  ) => { 
    if (preStart > preEnd) return null;
    if (preStart === preEnd) return new TreeNode(_preorder[preStart])

    let rootVal = _preorder[preStart];
    let rootLeftVal = _preorder[preStart + 1];

    let rootLeftIndex = 0;
    let i = postStart;
    while (i <= postEnd) { 
      if (_postorder[i] === rootLeftVal) { 
        rootLeftIndex = i;
        break;
      }
      i++
    }

    let root = new TreeNode(rootVal);
    let leftLen = rootLeftIndex - postStart + 1;

    root.left = build(
      _preorder, preStart + 1, preStart + leftLen,
      _postorder, postStart, rootLeftIndex
    );
    root.right = build(
      _preorder, preStart + leftLen + 1, preEnd,
      _postorder, rootLeftIndex + 1, postEnd - 1
    );

    return root;
  }

  return build(
    preorder, 0, preorder.length - 1,
    postorder, 0, postorder.length - 1
  )
};
// @lc code=end

