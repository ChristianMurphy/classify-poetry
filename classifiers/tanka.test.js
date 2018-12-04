import test from "ava";
import tanka from "./tanka";

test("taka poem", t => {
  t.true(
    tanka(`
      detect a tanka
      detector algorithm
      thanks algorithm
      nicely done detector, for
      another tanka poem found
    `)
  );
});

test("not haiku poem", t => {
  t.false(
    tanka(`
      random
      text
      for testing
    `)
  );
});
