const convertToCelsius = function(farh) {
  result = ((farh - 32) * (5/9) );
  if( result > Math.floor(result) ) { return Number(result.toFixed(1))}
 else {return result = Number(result)}
};

const convertToFahrenheit = function(cel) {
  result = (cel * (9/5) + 32);
 if( result > Math.floor(result) ) { return Number(result.toFixed(1))}
 else {return result = Number(result)}
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

