import { test } from "uvu";
import { is } from "uvu/assert";
import { tanka } from "./tanka.js";

test("taka poem", () => {
  is(
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
  is(
    tanka(`
      random
      text
      for testing
    `),
    false
  );
});

test.run();
