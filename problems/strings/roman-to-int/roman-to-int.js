// Given a roman numeral, convert it to an integer.

let string = 'XIV'

const romanToInt = (s) => {
    //hash that stores the values we need for each character
    const guide = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    // answer variable, set to 0 at start
    let answer = 0;
    //loop over the input string
    for(i=0; i<s.length; i++){
        // if current >= current +1, add the value of current index to answer
        // also check if it's the last character, do same thing if so
        if(guide[s[i]] >= guide[s[i+1]] || i === s.length-1){ 
            answer += guide[s[i]];
        }
        //can check if current value has a value less than next one, to catch all edge cases
        // else (aka current < current +1), add ((current + 1) - current) to answer
        else {
            answer += (guide[s[i+1]] - guide[s[i]]);
            i++;
        }
    }
    //return the answer
    return(answer);
};

romanToInt(string);