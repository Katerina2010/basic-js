const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(x) {
  if (x == null || x == undefined) { return false}
  const arr = Array.from(x)
  const arrStr = arr.filter((el) => typeof(el) === 'string')
const arrName = arrStr.map((el) => el.trim().toUpperCase())
const teamName = arrName.map((el) => el[0]).sort().join('');
return teamName
}


module.exports = {
  createDreamTeam
};
