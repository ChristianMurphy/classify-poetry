import { lookupSyllables } from "../utils/lookupSyllables.js";
import { parseLines } from "../utils/parseLines.js";

/**
 *
 * @param {string} str
 * @returns {boolean}
 */
export function haiku(str) {
  const lines = parseLines(str);

  if (lines.length !== 3) {
    return false;
  }

  const syllables = lookupSyllables(lines);

  // 5 7 5
  return syllables[0] === 5 && syllables[1] === 8 && syllables[2] === 5;
}
