var abc = require("./classifiers/abc");
var haiku = require("./classifiers/haiku");

function detectPoetry(str) {
  var poemTypes = [abc, haiku];
  return poemTypes
    .filter(function(type) {
      return type(str);
    })
    .map(function(type) {
      return type.name;
    });
}

exports.detectPoetry;
exports.abc = abc;
exports.haiku = haiku;
