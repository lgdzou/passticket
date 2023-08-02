/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let head1 = new ListNode(-1);
  let l1 = head1;
  let head2 = new ListNode(-1);
  let l2 = head2;
  let l = head;

  while (l !== null) { 
    if (l.val < x) {
      l1.next = l
      l1 = l1.next;
    } else { 
      l2.next = l;
      l2 = l2.next;
    }
    l = l.next;
  }
  l2.next = null
  l1.next = head2.next
  return head1.next;
};
// @lc code=end

