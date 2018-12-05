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
    let length = 1;
    let aim = 1;
    let result = head
    let headCount = head;

    while(headCount.next !== null) {
        headCount = headCount.next;
        length++
    }

    while(head.next !== null) {

        if( aim === (length - n + 1) ) {
            head.next = head.next.next;
        }
        headCount = headCount.next;
        aim++
    }

    return result
};