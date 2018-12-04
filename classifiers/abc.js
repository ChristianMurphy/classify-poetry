"use strict";

function abc(str) {
  var char = 97; // 'a'
  return str
    .trim()
    .toLowerCase()
    .split(/[\n\r]+/)
    .every(function(lines) {
      return lines.trim().charCodeAt(0) === char++;
    });
}

module.exports = abc;
