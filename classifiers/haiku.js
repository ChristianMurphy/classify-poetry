"use strict";

var syllables = require("syllable");

function haiku(str) {
  var stanzas = str
    .trim()
    .toLowerCase()
    .split(/[\n\r]+/);
  return (
    stanzas.length === 3 &&
    syllables(stanzas[0]) === 5 &&
    syllables(stanzas[1]) === 8 &&
    syllables(stanzas[2]) === 5
  );
}

module.exports = haiku;
