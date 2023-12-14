const convertToCelsius = function (farenhait) {
  let celcius = (farenhait - 32) * (5/9);

  let result = Number(celcius.toFixed(1));

  return result;
};

const convertToFahrenheit = function (celcius) {
  let farenhait = celcius * 1.8 + 32;

  let result = Number(farenhait.toFixed(1));

  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
