/*function removeFromArray(array, arg1, arg2, arg3, arg4) {
    let cutArray = array.filter(item => item !==arg1 && item!==arg2 && item!==arg3 && item!= arg4); //try to pass firtst test first
    return cutArray;
};*/

//cleaner solution that actually can do as many args 
function removeFromArray(array, ...args) {
    return array.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
