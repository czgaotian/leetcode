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
var reverseList = function(head) {
  let i = head
  let j = new ListNode(null)
  let t
  j.next = null
  while (i !== null) {
    t = i.next
    i.next = j.next
    j.next = i
    i = t
  }
  return j.next
};