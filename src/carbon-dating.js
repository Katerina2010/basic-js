const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(str) {
  console.log(typeof(str))
  if (typeof(str) === 'string') {
    let num = Number(str);
    if (isNaN(num)) {return false}; 
    console.log(num)
    if (num > 0 && num < MODERN_ACTIVITY) {
      const k = 0.693/HALF_LIFE_PERIOD;
      let year = Math.ceil(Math.log(MODERN_ACTIVITY/num)/k);
    return year
    } else {return false}
  }
  return false
 
}

module.exports = {
  dateSample
};
