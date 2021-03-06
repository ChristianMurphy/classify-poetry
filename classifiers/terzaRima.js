import { lookupSounds } from "../utils/lookupSounds.js";
import { parseLines } from "../utils/parseLines.js";

/**
 *
 * @param {string} str
 * @returns {boolean}
 */
export function terzaRima(str) {
  const lines = parseLines(str);

  if (lines.length < 12) {
    return false;
  }

  const sounds = lookupSounds(lines);

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
