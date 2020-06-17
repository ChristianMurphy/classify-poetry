"use strict";

var lookupSounds = require("../utils/lookupSounds");
var parseLines = require("../utils/parseLines");

function terzaRima(str) {
  var lines = parseLines(str);

  if (lines.length < 12) {
    return false;
  }

  var sounds = lookupSounds(lines);

  // ABA BCB CDC DED
  return (
    sounds[0] === sounds[2] && // A
    sounds[1] === sounds[3] && // B
    sounds[1] === sounds[5] && // B
    sounds[4] === sounds[6] && // C
    sounds[4] === sounds[8] && // C
    sounds[7] === sounds[9] && // D
    sounds[7] === sounds[11] // D
  );
}

module.exports = terzaRima;
