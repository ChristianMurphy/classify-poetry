"use strict";

var lookupSounds = require("../utils/lookupSounds");
var parseLines = require("../utils/parseLines");

function terzaRima(str) {
  var lines = parseLines(str);

  if (lines.length !== 5) {
    return false;
  }

  var sounds = lookupSounds(lines);

  // AABBA
  return (
    sounds[0] === sounds[1] && // A
    sounds[0] === sounds[4] && // A
    sounds[2] === sounds[3] // B
  );
}

module.exports = terzaRima;
