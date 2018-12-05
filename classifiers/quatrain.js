"use strict";

var lookupSounds = require('../utils/lookupSounds');
var parseLines = require('../utils/parseLines');

function sonnet(str) {
  var lines = parseLines(str);

  if (lines.length !== 4) {
    return false;
  }

  // A and B can appear in any order
  var sounds = lookupSounds(lines).sort();

  return (
    sounds[0] === sounds[1] ||
    sounds[1] === sounds[2] ||
    sounds[2] === sounds[3]
  );
}

module.exports = sonnet;
