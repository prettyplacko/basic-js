const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (Array.isArray(arr)){
  let transArr = [];
    arr.forEach((e)=>{
    transArr.push(e);
  });
  transArr.forEach((x)=>{
    if (transArr.indexOf(x) == 0 &&  x == '--discard-prev'){
      transArr.splice(transArr.indexOf(x), 1);
    } else if (transArr.indexOf(x) == 0 &&  x == '--double-prev'){
      transArr.splice(transArr.indexOf(x), 1);
    } else if (transArr.indexOf(x) == transArr.length-1 &&  x == '--discard-next'){
      transArr.splice(transArr.indexOf(x), 1);
    } else if (transArr.indexOf(x) == transArr.length-1 &&  x == '--double-next'){
      transArr.splice(transArr.indexOf(x), 1);
    } else if ( x == '--discard-next'){
      transArr.splice(transArr.indexOf(x), 2);
    } else if ( x == '--discard-prev'){
      transArr.splice(transArr.indexOf(x)-1, 2);
    } else if ( x == '--double-next'){
      transArr.splice(transArr.indexOf(x), 1, transArr[transArr.indexOf(x)+1]);
    } else if ( x == '--double-prev'){
      transArr.splice(transArr.indexOf(x), 1, transArr[transArr.indexOf(x)-1]);
    };
  });
  return transArr;
} else { return ('\'arr\' parameter must be an instance of the Array!'); }
}

module.exports = {
  transform
};
