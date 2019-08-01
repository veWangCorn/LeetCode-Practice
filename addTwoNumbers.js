/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
class ListNode{
    constructor(val){
        this.val = val
        this.next = null
    }
}
function createList(array){
    if(array.length===0) return null
    var node
    var head = new ListNode(array[0])
    var preNode = head
    for(var i=1;i<array.length;i++){
        node = new ListNode(array[i])
        preNode.next = node
        preNode = node
    }
    return head
}

function traverseList(listHead){
    while(listHead){
        listHead = listHead.next
    }
}
const l1 = createList([2,4,3])
const l2 = createList([5,6,4])
// console.log(l1)
// console.log(l2)
function addTwoNumbers(l1,l2){
    const handle=(node1,node2,value=0)=>{
        if(!node1&&!node2&&value===0) return null
        if(node1) value += node1.val
        if(node2) value += node2.val
        const next = handle(
            node1?node1.next:node1,
            node2?node2.next:node2,
            parseInt(value / 10)
        )
        console.log({
            val: value > 9 ? value - 10 : value,
            next
        })
        return {
            val:value>9?value-10:value,
            next
        }
    }
    return handle(l1,l2)
}
// console.log(addTwoNumbers(l1,l2))
addTwoNumbers(l1, l2)

//output:{ val: 7, next: { val: 0, next: { val: 8, next: null } } }