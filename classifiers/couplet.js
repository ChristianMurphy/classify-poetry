"use strict";

var lookupSounds = require("../utils/lookupSounds");
var parseLines = require("../utils/parseLines");

function haiku(str) {
  var lines = parseLines(str);

  // odd number of lines
  if (lines.length % 2 === 1) {
    return false;
  }

  var sounds = lookupSounds(lines);

  return sounds.every(function (sound, index) {
    // skip odd lines
    if (index % 2 === 1) {
      return true;
    }

    // paired lines should rhyme
    return sound === sounds[index + 1];
  });
}

module.exports = haiku;
