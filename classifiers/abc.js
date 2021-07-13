import { parseLines } from "../utils/parseLines.js";

/**
 *
 * @param {string} str
 * @returns {boolean}
 */
export function abc(str) {
  let char = 97; // 'a'
  return (
    parseLines(str)
      // abc...
      .every(function (lines) {
        return lines.trim().charCodeAt(0) === char++;
      })
  );
}
