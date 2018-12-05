var words = require("cmu-pronouncing-dictionary");

module.exports = function(lines) {
  return lines
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
}
