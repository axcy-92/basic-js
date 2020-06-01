const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) { return false };
  return members.filter(it => typeof it === 'string')
    .map(it => it.trim().toUpperCase()[0])
    .sort().join('')
};
