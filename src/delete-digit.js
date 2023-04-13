const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  const arr = Array.from(String(n), Number);
  const max = Math.max.apply(null, arr)
  let k = arr.indexOf(max);
  if (arr[0] === max) {
    arr.splice(k+1, 1);
  } else {
    arr.splice(k-1, 1);
  }
  return Number(arr.join(''));
}

module.exports = {
  deleteDigit
};
