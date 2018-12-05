"use strict";

var words = require("cmu-pronouncing-dictionary");

function terzaRima(str) {
  var lines = str
    .trim()
    .toLowerCase()
    .split(/[\n\r]+/);

  if (lines.length !== 5) {
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

  // AABBA
  return (
    sounds[0] === sounds[1] && // A
    sounds[0] === sounds[4] && // A
    sounds[2] === sounds[3] // B
  );
}

module.exports = terzaRima;
