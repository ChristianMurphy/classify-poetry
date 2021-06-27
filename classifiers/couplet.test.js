import { test } from "uvu";
import { is } from "uvu/assert";
import { couplet } from "./couplet.js";

test("couple poem 1", () => {
  is(
    couplet(`
      True wit is nature to advantage dressed;
      What oft was thought, but ne'er so well expressed.."
    `), // Alexander Pope
    true
  );
});

test("couple poem 2", () => {
  is(
    couplet(`
      Whether or not we find what we are seeking
      Is idle, biologically speaking.
    `), // Edna St. Vincent Millay
    true
  );
});

test("not couple poem", () => {
  is(
    couplet(`
      random
      text
      for testing
    `),
    false
  );
});

test.run();
