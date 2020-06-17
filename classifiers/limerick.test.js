const test = require("ava");
const limerick = require("./limerick");

test("limerick poem", (t) => {
  t.true(
    limerick(`
      The limerick packs laughs anatomical
      Into space that is quite economical.
      But the good ones I've seen
      So seldom are clean
      And the clean ones so seldom are comical.
    `) // unknown origin
  );
});

test("not limerick poem", (t) => {
  t.false(
    limerick(`
      random
      text
      for testing
    `)
  );
});
