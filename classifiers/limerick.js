import { lookupSounds } from "../utils/lookupSounds.js";
import { parseLines } from "../utils/parseLines.js";

/**
 *
 * @param {string} str
 * @returns {boolean}
 */
export function limerick(str) {
  const lines = parseLines(str);

  if (lines.length !== 5) {
    return false;
  }

  const sounds = lookupSounds(lines);

  // AABBA
  return (
    sounds[0] === sounds[1] && // A
    sounds[0] === sounds[4] && // A
    sounds[2] === sounds[3] // B
  );
}
