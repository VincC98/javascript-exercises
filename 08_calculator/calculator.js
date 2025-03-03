const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a -b;
};

const sum = function(a) {
	return a.reduce((total, item) => {
    return total + item;
  }, 0);
};

const multiply = function(a) {
  return a.reduce((total, item) => {
    return total * item;
  }, 1)
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let total = 1;
  for (let index = a; index > 0; index--) {
    total *= index;
  }
  return total;
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
