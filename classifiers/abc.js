"use strict";

function abc(str) {
  var char = 97; // 'a'
  return str
    .trim()
    .toLowerCase()
    .split(/[\n\r]+/)
    .every(function(stanza) {
      return stanza.trim().charCodeAt(0) === char++;
    });
}

module.exports = abc;
