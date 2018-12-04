import test from "ava";
import abc from "./tanka";

test("taka poem", t => {
  t.true(
    abc(`
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
    abc(`
      random
      text
      for testing
    `)
  );
});
