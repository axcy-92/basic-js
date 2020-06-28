const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  var result = {};
  result.turns = Math.pow(2, disksNumber) - 1;
  result.seconds = Math.floor(result.turns / (turnsSpeed / 60 / 60));
  return result;
};
