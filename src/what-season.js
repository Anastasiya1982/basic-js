const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  seasons = {winter: [0, 1, 11], spring: [2, 3, 4], summer: [5, 6, 7], fall: [8, 9, 10]}
  if (date instanceof Date && !isNaN(date)) {
    if (seasons.winter.includes(date.getMonth())) {
      return 'winter' }
    else
    if (seasons.spring.includes(date.getMonth())) {
      return 'spring'}
    else
    if (seasons.summer.includes(date.getMonth())) {
      return 'summer'}
    else
    if (seasons.fall.includes(date.getMonth()))   {
      return 'fall'}
  }
  else if (date !== undefined) {
    throw new Error();
  } else {
    return 'Unable to determine the time of year!';
  }

};
