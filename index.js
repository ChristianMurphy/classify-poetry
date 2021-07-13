import { abc } from "./classifiers/abc";
import { couplet } from "./classifiers/couplet";
import { haiku } from "./classifiers/haiku";
import { limerick } from "./classifiers/limerick";
import { quatrain } from "./classifiers/quatrain";
import { sonnet } from "./classifiers/sonnet";
import { tanka } from "./classifiers/tanka";
import { terzaRima } from "./classifiers/terzaRima";

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
