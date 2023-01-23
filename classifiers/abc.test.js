import { test } from "node:test";
import { equal } from "node:assert/strict";
import { abc } from "./abc.js";

test("abc poem", () => {
  equal(
    abc(`
      a poem
      becoming a test
      case
    `),
    true
  );
});

test("not abc poem", () => {
  equal(
    abc(`
      random
      text
      for testing
    `),
    false
  );
});
