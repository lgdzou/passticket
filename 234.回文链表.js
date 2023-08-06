/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let slow = head, fast = head;

  const reverseList = (head) => {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
  }

  // 找到慢指针的尾节点
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next
    fast = fast.next.next;
  }

  let left = head;
  let right = reverseList(slow.next);

  console.log(left, right)

  while (right !== null) { 
    if (left.val !== right.val) { 
      return false;
    }
    left = left.next;
    right= right.next;
  }

  return true;
};
// @lc code=end

