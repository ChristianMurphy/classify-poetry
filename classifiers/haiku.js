"use strict";

var syllables = require("syllable");

function haiku(str) {
  var lines = str
    .trim()
    .toLowerCase()
    .split(/[\n\r]+/);
  return (
    lines.length === 3 &&
    syllables(lines[0]) === 5 &&
    syllables(lines[1]) === 8 &&
    syllables(lines[2]) === 5
  );
}

module.exports = haiku;
