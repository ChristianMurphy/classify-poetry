const test = require("ava");
const abc = require("./abc");

test("abc poem", (t) => {
  t.true(
    abc(`
      a poem
      becoming a test
      case
    `)
  );
});

test("not abc poem", (t) => {
  t.false(
    abc(`
      random
      text
      for testing
    `)
  );
});
