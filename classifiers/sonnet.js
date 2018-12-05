"use strict";

var lookupSounds = require('../utils/lookupSounds');
var parseLines = require('../utils/parseLines');

function sonnet(str) {
  var lines = parseLines(str);

  if (lines.length !== 14) {
    return false;
  }

  var sounds = lookupSounds(lines);

  // ABBA ABBA CDE CDE
  // or
  // ABBA ABBA CDC CDC
  return (
    sounds[0] === sounds[3] && // A
    sounds[0] === sounds[4] && // A
    sounds[0] === sounds[7] && // A
    sounds[1] === sounds[2] && // B
    sounds[1] === sounds[5] && // B
    sounds[1] === sounds[6] && // B
    sounds[8] === sounds[11] && // C
    sounds[9] === sounds[12] && // D
    sounds[10] === sounds[13] // C or E
  );
}

module.exports = sonnet;
