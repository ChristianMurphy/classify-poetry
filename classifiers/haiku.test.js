import { test } from "node:test";
import { equal } from "node:assert/strict";
import { haiku } from "./haiku.js";

test("haiku poem", () => {
  equal(
    haiku(`
      detect a haiku
      pleased to do, says algorithm
      thanks algorithm
    `),
    true
  );
});

test("not haiku poem", () => {
  equal(
    haiku(`
      random
      text
      for testing
    `),
    false
  );
});
