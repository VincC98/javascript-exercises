const sumAll = function(nb1, nb2) {
    if (nb1 < 0 || nb2 < 0){
        return "ERROR";
    }
    else if (Number.isInteger(nb1) != true || Number.isInteger(nb2) != true) {
        return "ERROR";
    }
    else if (typeof nb1 != "number" || typeof nb2 != "number" ) {
        return "ERROR";
    }

    let sumTotal = 0;
    if (nb1 > nb2) {
        let tmp = nb1;
        nb1 = nb2;
        nb2 = tmp;
    }
    for(let i = nb1; i <= nb2; i++){
        sumTotal += i;
    }
    return sumTotal;
};

// Do not edit below this line
module.exports = sumAll;
