"use strict";

var syllables = require("syllable");

function tanka(str) {
  var lines = str
    .trim()
    .toLowerCase()
    .split(/[\n\r]+/);

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
