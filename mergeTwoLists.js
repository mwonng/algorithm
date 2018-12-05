/**
 * 21. Leetcode
 * @param {ListNode} l1
 * @param {ListNode} l2
 */

var mergeTwoLists = function(l1, l2) {

    if (l1 == null) {
            return l2;
    } else if (l2 == null) {
        return l1;
    } else if(l1.val <= l2.val) {
        l1.next =  mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};


var mergeTwoLists = function(l1, l2) {
    let arr = [];
    let pointer1 = l1
    let pointer2 = l2;

    if (pointer1) {
        do {
            arr.push(pointer1.val);
            pointer1 = pointer1.next
        } while(pointer1)
    }

    if (pointer2) {
        do {
            arr.push(pointer2.val);
            pointer2 = pointer2.next
        } while(pointer2)
    }

    arr.sort((a,b) => a-b);

    console.log(arr);

    if (arr.length < 1) {
        return null;
    }

    var resultPointer = new ListNode(undefined);
    var result = resultPointer;


    arr.forEach( a => {
        resultPointer.next = new ListNode(a);
        resultPointer = resultPointer.next;
    })

    return result.next;

};