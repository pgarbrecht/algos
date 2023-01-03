/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

Example 1:
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
*/

var defangIPaddr = function(address) {
    //initialize empty answer string
    let answer = '';
    //loop over input string
    for(let i=0; i<address.length; i++){
        //if current value is a period, concatenate [.] to answer string
        if(address[i] === '.'){
            answer += '[.]'
        }
        //else, it must be a number so concatenate the number to answer string
        else{
            answer += address[i]
        }
    }
    //return answer array
    return answer;
};