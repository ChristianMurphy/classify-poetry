import {syllable} from "syllable"

/**
 * 
 * @param {string[]} lines 
 * @returns {number[]}
 */
export function lookupSyllables (lines) {
  return lines.map(function (line) {
    return syllable(line);
  });
};
