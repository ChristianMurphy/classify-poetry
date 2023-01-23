import { test } from "node:test";
import { equal } from "node:assert/strict";
import { tanka } from "./tanka.js";

test("taka poem", () => {
  equal(
    tanka(`
      detect a tanka
      detector algorithm
      thanks algorithm
      nicely done detector, for
      another tanka poem found
    `),
    true
  );
});

test("not haiku poem", () => {
  equal(
    tanka(`
      random
      text
      for testing
    `),
    false
  );
});
