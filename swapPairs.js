/**
 * 24 Leetcode
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
var swapPairs = function(head) {
    if(head == null || head.next == null)
        return head
    let resultHead = head.next;
    let ptr1 = head;
    let ptr2 = head.next;
    let pre = null;
    while(ptr1 != null && ptr2 != null){
        ptr1.next = ptr2.next;
        ptr2.next = ptr1;
        if(pre != null)
            pre.next = ptr2;
        if(ptr1.next == null) break;
        ptr2 = ptr1.next.next;
        pre = ptr1;
        ptr1 = ptr1.next;
    }
    return resultHead;
};