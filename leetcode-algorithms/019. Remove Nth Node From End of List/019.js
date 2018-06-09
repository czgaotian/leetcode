/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let nullHead = new ListNode(null);
  nullHead.next = head;
  let p1= nullHead;
  let p2 = nullHead;
  for(var i = 0; i < n + 1; i++)
    p1= p1.next;
  while (p1 != null) {
    p1 = p1.next
    p2 = p2.next
  }
  p2.next = p2.next.next
  return nullHead.next
};