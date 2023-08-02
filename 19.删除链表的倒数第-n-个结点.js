/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let list = new ListNode(-1);
  list.next = head;
  let node = findKNode(list, n + 1);

  node.next = node.next.next
  return list.next;
};

var findKNode = function (head, k) { 
  let l1 = head;
  let i = 0;
  while (i < k) { 
    l1 = l1.next;
    i++;
  }
  let l2 = head;
  while (l1 !== null) { 
    l1 = l1.next;
    l2 = l2.next;
  }
  return l2;
}
// @lc code=end

