import { test } from "node:test";
import { equal } from "node:assert/strict";
import { limerick } from "./limerick.js";

test("limerick poem", () => {
  equal(
    limerick(`
      The limerick packs laughs anatomical
      Into space that is quite economical.
      But the good ones I've seen
      So seldom are clean
      And the clean ones so seldom are comical.
    `), // unknown origin
    true
  );
});

test("not limerick poem", () => {
  equal(
    limerick(`
      random
      text
      for testing
    `),
    false
  );
});
