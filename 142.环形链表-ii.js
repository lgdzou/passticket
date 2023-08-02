/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let fast = head, slow = head;

  while (fast !== null && fast.next !== null) { 
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) break;
  }

  if (fast === null || fast.next === null) return null;

  slow = head;
  while (fast !== slow) { 
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};
// @lc code=end

