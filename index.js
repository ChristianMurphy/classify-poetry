var abc = require("./classifiers/abc");
var haiku = require("./classifiers/haiku");
var tanka = require("./classifiers/tanka");
var terzaRima = require("./classifiers/terzaRima");

var all = [abc, haiku, tanka, terzaRima];

function detectPoetry(str) {
  return all
    .filter(function(type) {
      return type(str);
    })
    .map(function(type) {
      return type.name;
    });
}

exports.all = all;
exports.detectPoetry = detectPoetry;
exports.abc = abc;
exports.haiku = haiku;
exports.tanka = tanka;
exports.terzaRima = terzaRima;
