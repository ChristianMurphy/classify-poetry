"use strict";

var syllables = require("syllable");
var parseLines = require('../utils/parseLines');

function tanka(str) {
  var lines = parseLines(str);

  return (
    lines.length === 5 &&
    syllables(lines[0]) === 5 &&
    syllables(lines[1]) === 7 &&
    syllables(lines[2]) === 5 &&
    syllables(lines[3]) === 7 &&
    syllables(lines[4]) === 7
  );
}

module.exports = tanka;
