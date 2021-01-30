const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
       let depth=1;
       for(let i of arr){
         let deep=1;
         if(Array.isArray(i)){
           deep= deep + this.calculateDepth(i);
           if(deep > depth){
             depth = deep;
           }
         }
       }
       return depth;
  }
};
