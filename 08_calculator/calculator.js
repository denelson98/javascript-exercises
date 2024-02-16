const add = function(num1, num2) {
	let add = num1+num2
  return add
};

const subtract = function(num1, num2) {
	let subtract = num1 - num2
  return subtract
};

const sum = function(...nums) {
  let sum = 0;
  for (let num of nums) sum += num;
  return sum
};

const multiply = function(num1, num2) {
  let multiply = num1*num2
};

const power = function(num1, num2) {
	let power = num1^num2
  return power
};

const factorial = function() {
	
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
