/**************************************************************************************************************************
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
**************************************************************************************************************************/


/* The Solution below will fail on a usecase where it reaches the maximum size of integer (more than 16 digits) */

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
var addTwoNumbers = function(l1, l2) {
    var sum = returnNumber(l1) + returnNumber(l2);  
    console.log(sum);
    return formListNode(sum);
};

function returnNumber(list)
{
    if(list.next != null)
    {
        return (returnNumber(list.next) * 10) + list.val;
    }
    else
    {
        return list.val;
    }
}

function formListNode(number)
{
    var reminder = number % 10;
    var listObj = {};
    listObj.val = reminder;
    number = Math.floor(number / 10);
    if(number > 0)
    {
        listObj.next = formListNode(number);
    }
    else
    {
        listObj.next = null;
    }
    return listObj;
}


/**************************************************************************************************************************/

