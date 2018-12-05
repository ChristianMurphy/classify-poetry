"use strict";

var syllables = require("syllable");
var parseLines = require('../utils/parseLines');

function haiku(str) {
  var lines = parseLines(str);
  return (
    lines.length === 3 &&
    syllables(lines[0]) === 5 &&
    syllables(lines[1]) === 8 &&
    syllables(lines[2]) === 5
  );
}

module.exports = haiku;
