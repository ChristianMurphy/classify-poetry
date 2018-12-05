"use strict";

var parseLines = require('../utils/parseLines');

function abc(str) {
  var char = 97; // 'a'
  return parseLines(str)
    // abc...
    .every(function(lines) {
      return lines.trim().charCodeAt(0) === char++;
    });
}

module.exports = abc;
