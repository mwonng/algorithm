/**
 * 25. Reverse Nodes in k-Group
 *
 * Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
 * k is a positive integer and is less than or equal to the length of the linked list. If the number
 * of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
 *
 * Example:
 * Given this linked list: 1->2->3->4->5
 *
 * For k = 2, you should return: 2->1->4->3->5
 *
 * For k = 3, you should return: 3->2->1->4->5
 *
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (head === null || head.next === null || k < 2) {
      return head
  }

  let dummy = new ListNode(null);
  dummy.next= head;
  let len = getLength(head);
  reverseKGroupRecur(dummy, k, len);
  return dummy.next;

};

function reverseKGroupRecur(prevTail, k, len) {
  if (len < k) {
      return;
  }

  let prev = prevTail.next;

  for (let i = 0; i < k - 1; ++i) {
      let curr = prev.next;
      prev.next = curr.next;
      curr.next = prevTail.next;
      prevTail.next = curr;
  }
  reverseKGroupRecur(prev, k, len - k);
}

function getLength(head) {
  let len = 0;
  while (head !== null) {
      len++;
      head = head.next;
  }
  return len;
}