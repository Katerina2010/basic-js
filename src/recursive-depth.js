const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr, count = 1) {
    let rezCount = count;
    for (const item of arr) {
      if (Array.isArray(item)) {
        let rez = this.calculateDepth(item, count + 1);
        if (rez > rezCount) {
          rezCount = rez;
        }
      }
    }
  return rezCount;
  }
}


module.exports = {
  DepthCalculator
};
