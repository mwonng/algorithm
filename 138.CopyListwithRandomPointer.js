/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;
    const dummy = new Node();
    const map = new Map();

    let src = head;
    let dest = dummy;

    while (src) {
        dest.next = new Node(src.val);
        map.set(src, dest.next);
        src = src.next;
        dest = dest.next;
    }

    for (let [src, dest] of map) {
        dest.random = map.get(src.random) || null;
    }
    return dummy.next;
}


console.log(copyRandomList({"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}))

function Node(val,next,random) {
    this.val = val;
    this.next = next;
    this.random = random;
    return this;
};