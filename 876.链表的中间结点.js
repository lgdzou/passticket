/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let p1 = head, p2 = head;
  while (p1.next !== null) { 
    p1 = p1.next;
    if (p1.next !== null) { 
      p1 = p1.next;
    }
    p2 = p2.next;
  }
  return p2
};
// @lc code=end

