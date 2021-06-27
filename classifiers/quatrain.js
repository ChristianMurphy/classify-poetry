import { lookupSounds } from "../utils/lookupSounds.js";
import { parseLines } from "../utils/parseLines.js";

/**
 *
 * @param {string} str
 * @returns {boolean}
 */
export function quatrain(str) {
  const lines = parseLines(str);

  if (lines.length !== 4) {
    return false;
  }

  // A and B can appear in any order
  const sounds = lookupSounds(lines).sort();

  return (
    sounds[0] === sounds[1] ||
    sounds[1] === sounds[2] ||
    sounds[2] === sounds[3]
  );
}
