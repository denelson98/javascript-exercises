function removeFromArray(array, ...otherArguments) {
    let cutArray = array.filter(item => item !== otherArguments); //try to pass firtst test first
    return cutArray;
};

// Do not edit below this line
module.exports = removeFromArray;
