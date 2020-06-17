var abc = require("./classifiers/abc");
var couplet = require("./classifiers/couplet");
var haiku = require("./classifiers/haiku");
var limerick = require("./classifiers/limerick");
var quatrain = require("./classifiers/quatrain");
var sonnet = require("./classifiers/sonnet");
var tanka = require("./classifiers/tanka");
var terzaRima = require("./classifiers/terzaRima");

var all = [abc, couplet, haiku, limerick, quatrain, sonnet, tanka, terzaRima];

function classifyPoetry(str) {
  return all
    .filter(function (type) {
      return type(str);
    })
    .map(function (type) {
      return type.name;
    });
}

exports.all = all;
exports.classifyPoetry = classifyPoetry;
exports.abc = abc;
exports.couplet = couplet;
exports.haiku = haiku;
exports.limerick = limerick;
exports.quatrain = quatrain;
exports.sonnet = sonnet;
exports.tanka = tanka;
exports.terzaRima = terzaRima;
