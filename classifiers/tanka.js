"use strict";

var lookupSyllables = require("../utils/lookupSyllables");
var parseLines = require("../utils/parseLines");

function tanka(str) {
  var lines = parseLines(str);

  if (lines.length !== 5) {
    return false;
  }

  var syllables = lookupSyllables(lines);

  // 5 7 5 7 7
  return (
    syllables[0] === 5 &&
    syllables[1] === 7 &&
    syllables[2] === 5 &&
    syllables[3] === 7 &&
    syllables[4] === 7
  );
}

module.exports = tanka;
