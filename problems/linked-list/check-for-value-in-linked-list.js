// Given a linked lists with different fruits as values of each node, check if a target fruit is in the list

let head = {value: 'apple', next: {value: 'apple banana', next: {value: 'cherry', next: {value: 'orange', next: {value: 'pear', next: null}}}}}
let target = 'kiwi'

function hasFruit(head,target) { //pass in head and target
	let currentNode = head; //start at the head of linked list (node 1)
	while(currentNode !== null) { //keep going through linked list until end
		if(currentNode.value == target) { //if we find the target fruit while traversing the linked list, return true
		return true;
		}
		currentNode = currentNode.next; //move to next node after checking if it equals target fruit
	}
	return false; //if we never found the target fruit, return false
}

hasFruit(head,target)