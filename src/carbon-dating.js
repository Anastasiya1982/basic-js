const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string' || Number(sampleActivity) <= 0 || Number(sampleActivity) > MODERN_ACTIVITY || Number.isNaN(sampleActivity) == false) return false;
  let x, y;
  x = 0.693 / HALF_LIFE_PERIOD;
  y = Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / x);
  return y

};
