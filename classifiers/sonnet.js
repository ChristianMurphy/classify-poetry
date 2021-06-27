import { lookupSounds } from "../utils/lookupSounds.js";
import { parseLines } from "../utils/parseLines.js";

/**
 *
 * @param {string} str
 * @returns {boolean}
 */
export function sonnet(str) {
  const lines = parseLines(str);

  if (lines.length !== 14) {
    return false;
  }

  const sounds = lookupSounds(lines);

  // ABBA ABBA CDE CDE
  // or
  // ABBA ABBA CDC CDC
  return (
    sounds[0] === sounds[3] && // A
    sounds[0] === sounds[4] && // A
    sounds[0] === sounds[7] && // A
    sounds[1] === sounds[2] && // B
    sounds[1] === sounds[5] && // B
    sounds[1] === sounds[6] && // B
    sounds[8] === sounds[11] && // C
    sounds[9] === sounds[12] && // D
    sounds[10] === sounds[13] // C or E
  );
}
