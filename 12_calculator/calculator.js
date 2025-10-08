const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

// calculator.sum( [7, 11]) ) toBe (18)

const sum = function(arr) {
	return arr.reduce( (total, item) => (total + item), 0 )
};

const multiply = function(arr) {
  return arr.reduce( (total, item) => (total * item) )
};

// calculator.power(4, 3)).toBe(64); // 4 to third power is 64

const power = function(num, power) {
 let total = 1
   for (i = 1; i <= power; i++){total *= num}
   return total
};

const factorial = function(num) {
	let total = num
   for (i = 1; i <= num-1 ; i++){total *= i}  
  if (total == 0) {return 1} else {return total}
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
