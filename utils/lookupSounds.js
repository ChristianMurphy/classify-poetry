import {dictionary} from "cmu-pronouncing-dictionary"

/**
 * 
 * @param {string[]} lines 
 * @returns {string[]}
 */
export function lookupSounds (lines) {
  return lines
    .map(function (line) {
      // final word and punctuation
      return line.match(/[^\s]+$/)?.[0];
    })
    .map(function (wordAndPunctuation) {
      // just the word
      return wordAndPunctuation?.match(/[\w]+/)?.[0];
    })
    .map(function (word, index) {
      if (word === undefined) throw new TypeError(`no final word found on line: ${index + 1}`);
      // lookup in cmu pronunciation dictionary
      return dictionary[word.toLowerCase()];
    })
    .map(function (sounds) {
      // final sound of pronunciation
      return sounds.split(" ").reverse()[0];
    });
};
