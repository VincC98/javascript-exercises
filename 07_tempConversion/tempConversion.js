const convertToCelsius = function(tempFahrenheit) {
  let toCelsius = (tempFahrenheit - 32) * 9/5;
  return parseFloat(toCelsius.toFixed(1));
};

const convertToFahrenheit = function(tempCelsius) {
  let toFahrenheit = (tempCelsius * 9/5) + 32;
  return parseFloat(toFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
