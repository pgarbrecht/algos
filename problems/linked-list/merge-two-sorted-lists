/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
*/

//pass in two linked lists
var mergeTwoLists = function(list1, list2) {
    // Initialise a new LinkedList with a dummy ListNode
    let newList = new ListNode(0);

    // Maintain a reference to the head of the new LinkedList
    let headOfNewList = newList;

    // While both of the passed in lists are not at the end node
    while (list1 != null && list2 != null) {
        // If list1's value is smaller
        if (list1.val < list2.val) {
            // Add list1's value to the new list
            newList.next = list1;

            // Move list1 to its next node
            list1 = list1.next;
        } else {
            // Add list2's value to the new list
            newList.next = list2;

            // Move list2 to its next node
            list2 = list2.next;
        }

        // Move into the next level of the LinkedList for the next iteration
        newList = newList.next;
    }

    // If list1 has run out of nodes
    if (list1 == null) {
        // Append list2 to the new list
        newList.next = list2;
    }
    // If list2 has run out of nodes
    else {
        // Append list1 to the new list
        newList.next = list1;
    }

    return headOfNewList.next;
};