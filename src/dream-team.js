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
function createDreamTeam(members) {
  if (Array.isArray(members) && members.length !== 0) {
      
    let result = [];
    let filtered = members.filter( (elem) => typeof elem === 'string');
    for (i = 0; i < filtered.length; i++) {
        let empt = [];
        empt.push(filtered[i].trim())
        let newString = String(filtered[i]).trim();
        result += newString[0].toUpperCase();
    }
    return result.split('').sort().join('');;
} else return false
}

module.exports = {
  createDreamTeam
};
