const reverseString = function(inputString) {
    
    let reversedString = "";
    for(let i = inputString.length-1; i >= 0; i--){
        reversedString += inputString[i];
    }
    console.log(reversedString)
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
