import { test } from "uvu";
import { is } from "uvu/assert";
import { limerick } from "./limerick.js";

test("limerick poem", () => {
  is(
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
  is(
    limerick(`
      random
      text
      for testing
    `),
    false
  );
});

test.run();
