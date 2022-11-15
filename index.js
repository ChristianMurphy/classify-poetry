import { abc } from "./classifiers/abc.js";
import { couplet } from "./classifiers/couplet.js";
import { haiku } from "./classifiers/haiku.js";
import { limerick } from "./classifiers/limerick.js";
import { quatrain } from "./classifiers/quatrain.js";
import { sonnet } from "./classifiers/sonnet.js";
import { tanka } from "./classifiers/tanka.js";
import { terzaRima } from "./classifiers/terzaRima.js";

const all = [abc, couplet, haiku, limerick, quatrain, sonnet, tanka, terzaRima];

/**
 *
 * @param {string} str
 * @returns {string[]}
 */
function classifyPoetry(str) {
  return all.filter((type) => type(str)).map((type) => type.name);
}

export {
  classifyPoetry,
  all,
  abc,
  couplet,
  haiku,
  limerick,
  quatrain,
  sonnet,
  tanka,
  terzaRima,
};
