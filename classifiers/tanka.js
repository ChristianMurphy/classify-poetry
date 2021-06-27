import { parseLines } from "../utils/parseLines.js";
import { lookupSyllables } from "../utils/lookupSyllables.js";

/**
 *
 * @param {string} str
 * @returns {boolean}
 */
export function tanka(str) {
  const lines = parseLines(str);

  if (lines.length !== 5) {
    return false;
  }

  const syllables = lookupSyllables(lines);

  // 5 7 5 7 7
  return (
    syllables[0] === 5 &&
    syllables[1] === 7 &&
    syllables[2] === 5 &&
    syllables[3] === 7 &&
    syllables[4] === 7
  );
}
