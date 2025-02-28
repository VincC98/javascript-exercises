const repeatString = function(inputString, nbRepeat) {
    if (nbRepeat < 0) return "ERROR"; 
    let returnString = "";
    for (let i = 0; i < nbRepeat; i++) { 
        returnString += inputString;
    }
    return returnString;
    
};

// Do not edit below this line
module.exports = repeatString;
