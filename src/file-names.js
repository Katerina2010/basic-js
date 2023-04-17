const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  const arr = [];
  arr.push(names[0]);
  for (let i = 1; i< names.length; i++) {
    let count = 1;
    let el = names[i];
    for (let j = 0; j < i; j++) {
      if (arr[j] === el) {
        el = names[i] + `(${count})`;
        count++
      }
    }
    arr.push(el)
  }
  return names.length == 0 ? [] : arr
}

module.exports = {
  renameFiles
};
