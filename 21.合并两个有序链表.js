/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head = new ListNode(-1);
  let list = head;
  let l1 = list1, l2 = list2;

  while (l1 !== null && l2 !== null) { 
    if (l1.val <= l2.val) {
      head.next = l1;
      l1 = l1.next;
    } else { 
      head.next = l2;
      l2 = l2.next;
    }
    head = head.next
  }

  if (l1 !== null) { 
    head.next = l1
  }

  if (l2 !== null) { 
    head.next = l2
  }

  return list.next;
};
// @lc code=end

