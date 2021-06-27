import { lookupSounds } from "../utils/lookupSounds.js";
import { parseLines } from "../utils/parseLines.js";

/**
 *
 * @param {string} str
 * @returns {boolean}
 */
export function couplet(str) {
  const lines = parseLines(str);

  // odd number of lines
  if (lines.length % 2 === 1) {
    return false;
  }

  const sounds = lookupSounds(lines);

  return sounds.every(function (sound, index) {
    // skip odd lines
    if (index % 2 === 1) {
      return true;
    }

    // paired lines should rhyme
    return sound === sounds[index + 1];
  });
}
