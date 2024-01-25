function sumAll(min, max) {
    if (min < 0 || max <0){
        return "ERROR";
    } else if (min > max && Number.isInteger(min) && Number.isInteger(max)) {
        return min*(min+1)/2;
    } else if (min < max && Number.isInteger(min) && Number.isInteger(max)){
        return max*(max+1)/2;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
