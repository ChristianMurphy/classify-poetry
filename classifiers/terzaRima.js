"use strict";

var words = require("cmu-pronouncing-dictionary");

function terzaRima(str) {
  var lines = str
    .trim()
    .toLowerCase()
    .split(/[\n\r]+/);

  if (lines.length < 12) {
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
