import { test } from "uvu";
import { is } from "uvu/assert";
import { haiku } from "./haiku.js";

test("haiku poem", () => {
  is(
    haiku(`
      detect a haiku
      pleased to do, says algorithm
      thanks algorithm
    `),
    true
  );
});

test("not haiku poem", () => {
  is(
    haiku(`
      random
      text
      for testing
    `),
    false
  );
});

test.run();
