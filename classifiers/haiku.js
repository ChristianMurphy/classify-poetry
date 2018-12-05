"use strict";

var lookupSyllables = require("../utils/lookupSyllables");
var parseLines = require("../utils/parseLines");

function haiku(str) {
  var lines = parseLines(str);

  if (lines.length !== 3) {
    return false;
  }

  var syllables = lookupSyllables(lines);

  // 5 7 5
  return syllables[0] === 5 && syllables[1] === 8 && syllables[2] === 5;
}

module.exports = haiku;
