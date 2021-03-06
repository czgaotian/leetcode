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
var mergeTwoLists = function(l1, l2) {
  //遍历l2链表，将元素一一插入l1  
  while(l2){  
    //先前的l1元素  
    var prev = null;  
    //当前的l1元素  
    var cur = l1;  
    //遍历l1链表，找到可插入l2元素的位置  
    while(cur && l2.val > cur.val){  
        //记录先前的l1元素  
        prev = cur;  
        //记录当前的l1元素  
        cur = cur.next;  
    }  
    //生成新的节点  
    //注意：并没有利用l2已有的节点  
    var newNode = new ListNode(l2.val);  
    //插入新节点  
    //新节点的next指向当前的l1元素  
    newNode.next = cur;  
    //如果是在l1链表中间插入  
    //或者说新节点有前驱  
    if(prev){  
        //先前元素的next指向新节点  
        prev.next = newNode;  
    }//如果新节点插在链表头部  
    else{  
        l1 = newNode;  
    }  
    l2 = l2.next;  
  }  
  //返回l1  
  return l1;  
};