function convertToCelsius(fahrenheit) {
  let temp = (fahrenheit - 32) * 5/9;
  let roundedTemp = Math.round(temp*10)/10;
  return roundedTemp;
};

function convertToFahrenheit(celcius) {
  let temp = (celcius * 9/5) + 32;
  let roundedTemp = Math.round(temp*10)/10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
