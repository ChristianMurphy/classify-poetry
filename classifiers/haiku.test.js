import test from "ava";
import abc from "./haiku";

test("haiku poem", t => {
  t.true(
    abc(`
      detect a haiku
      please to do says algorithm
      thanks algorithm
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
