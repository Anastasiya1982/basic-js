const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  // `--discard-next `, `--discard-prev`,`--double-next`,`--double-prev`

  if(!Array.isArray(arr))throw new Error('Error');
  //
  let result=[];
  if(arr.length===0) {
    return result
  };


  arr.forEach((item, i,arr)=> {
    if (item !== '--discard-next' && item !== '--discard-prev' && item !== '--double-next' && item !== '--double-prev') {
      result.push(item);

      if (arr[i - 1] === '--discard-next') {
        result.pop()
      }
      if (arr[i - 1] === '--double-next') {
        result.push(item)
      }
      if ((arr[i + 1] === '--discard-prev') & (arr[i - 1] !== '--discard-next')) {
        result.pop()
      }
      if ((arr[i + 1] === '--double-prev') && (arr[i - 1] !== '--discard-next')) {
        result.push(item)
      }
    }
  });

return result;

};
