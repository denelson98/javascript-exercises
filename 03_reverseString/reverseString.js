function reverseString(string) {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}

/* without using built-in functions 
function reverseString(string){
    let newString = "";
    for (i = string.length -1; i >=0; i--){
        newString += string[i];
    }
    return newString
}*/


// Do not edit below this line
module.exports = reverseString;
