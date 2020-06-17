const test = require("ava");
const haiku = require("./haiku");

test("haiku poem", (t) => {
  t.true(
    haiku(`
      detect a haiku
      pleased to do, says algorithm
      thanks algorithm
    `)
  );
});

test("not haiku poem", (t) => {
  t.false(
    haiku(`
      random
      text
      for testing
    `)
  );
});
