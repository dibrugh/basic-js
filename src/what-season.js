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
  if (date) {
    if (typeof Date.parse(date) === 'number') {
      const month = date.getMonth();
      if (month >= 2 && month <= 4) return 'spring'
      else if (month > 4 && month < 9) return 'summer'
      else if (month > 8 && month <11) return 'autumn'
      else return 'winter'
    }
    else return "Invalid date!"
  } else return 'Unable to determine the time of year!'
}

module.exports = {
  getSeason
};
