/**
 * 
 * @param {string} str 
 * @returns {string[]}
 */
export function parseLines (str) {
  return str
    .trim()
    .toLowerCase()
    .split(/[\n\r]+/);
};
