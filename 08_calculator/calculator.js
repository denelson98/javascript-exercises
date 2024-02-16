const add = function(num1, num2) {
	/*let add = num1+num2
  return add*/
  return num1 + num2
};

const subtract = function(num1, num2) {
	/*let subtract = num1 - num2
  return subtract*/
  return num1 - num2
};

const sum = function(array) {
  /*let sum = 0
  for (i=0; i < array.length; i++){
    sum += array[i]
  }
  return sum*/
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  /*let multiply = 1
  for (i=0; i < array.length; i++){
    multiply *= array[i]
  }
  return multiply*/
  return array.reduce((product, current) => product * current)
};

const power = function(num1, num2) {
	/*let power = num1**num2
  return power*/
  return num1**num2
};

const factorial = function(num) {
	let factorial = num
  if (factorial == 0){
    return 1;
  } else {
    for (i=1; i<num; i++){
      factorial *= (num-i)
    }
  }
  return factorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
