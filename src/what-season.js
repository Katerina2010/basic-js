const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if (Object.keys(date).length > 0) {
    throw new Error('Invalid date!')
  }
  if (date instanceof Date) {
    //if (Date.parse === NaN) { throw new Error('Invalid date!') }
    let k = date.getMonth();
    if (k === 0 || k === 1 || k === 11) { 
      return 'winter'
    } else if (k === 2 || k === 3 || k === 4) {
      return 'spring'
    } else if (k === 5 || k === 6 || k === 7) {
      return 'summer'
    } else if (k === 8 || k === 9 || k === 10) {
      return 'autumn'
    } else {
      throw new Error('Invalid date!');}
  } else {
    return 'Unable to determine the time of year!'}
}

module.exports = {
  getSeason
};
