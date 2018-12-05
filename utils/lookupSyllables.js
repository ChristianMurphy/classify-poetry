var syllable = require("syllable");

module.exports = function(lines) {
  return lines.map(function(line) {
    return syllable(line);
  });
};
