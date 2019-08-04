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
var deleteDuplicates = function (head) {
    let preHead = new ListNode(0);
    preHead.next = head;
    let dummy = head;
    let last = preHead;
    let isDup = false;

    if (head === undefined) return head
    while (head) {
        if (isDup === head.val) {
            last.next = head.next
            head = head.next
            continue;
        }

        if (head.next && head.val !== head.next.val) {
            isDup = false;
            last = head;
            head = head.next;
            continue;
        }

        if (head.next && head.val === head.next.val) {
            last.next = head.next;
            head = last.next
            isDup = head.val;
            continue;
        }

        head = head.next;
    }
    return preHead.next;
};