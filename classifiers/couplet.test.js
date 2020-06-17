const test = require("ava");
const couplet = require("./couplet");

test("couple poem 1", (t) => {
  t.true(
    couplet(`
      True wit is nature to advantage dressed;
      What oft was thought, but ne'er so well expressed.."
    `) // Alexander Pope
  );
});

test("couple poem 2", (t) => {
  t.true(
    couplet(`
      Whether or not we find what we are seeking
      Is idle, biologically speaking.
    `) // Edna St. Vincent Millay
  );
});

test("not couple poem", (t) => {
  t.false(
    couplet(`
      random
      text
      for testing
    `)
  );
});
