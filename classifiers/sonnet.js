"use strict";

var words = require("cmu-pronouncing-dictionary");

function sonnet(str) {
  var lines = str
    .trim()
    .toLowerCase()
    .split(/[\n\r]+/);

  if (lines.length !== 14) {
    return false;
  }

  var sounds = lines
    .map(function(line) {
      // final word and punctuation
      return line.match(/[^\s]+$/)[0];
    })
    .map(function(wordandPuncutation) {
      // just the word
      return wordandPuncutation.match(/[\w]+/)[0];
    })
    .map(function(word) {
      // lookup in cmu pronunciation dictionary
      return words[word.toLowerCase()];
    })
    .map(function(sounds) {
      // final sound of pronunciation
      return sounds.split(" ").reverse()[0];
    });

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
