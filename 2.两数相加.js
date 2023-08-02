/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let res = new ListNode();
  let p1 = l1, p2 = l2;
  let root = res;

  let rest = 0;
  while (p1 !== null || p2 !== null) {
    let val1 = p1 ? p1.val : 0;
    let val2 = p2 ? p2.val : 0;

    let sum = val1 + val2 + rest;
    let val = sum % 10
    rest = (sum - val) / 10

    root.next = new ListNode(val)
    root = root.next;

    if (p1 !== null) p1 = p1.next;
    if (p2 !== null) p2 = p2.next;
  }

  if (rest !== 0) { 
    root.next = new ListNode(rest)
  }

  return res.next;
};
// @lc code=end

