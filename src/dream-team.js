const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let team = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
      team.push(members[i].trim().charAt(0).toUpperCase());
    }
  }
  return team.sort().join('');
};
