import { test } from "node:test";
import { equal } from "node:assert/strict";
import { couplet } from "./couplet.js";

test("couple poem 1", () => {
  equal(
    couplet(`
      True wit is nature to advantage dressed;
      What oft was thought, but ne'er so well expressed.."
    `), // Alexander Pope
    true
  );
});

test("couple poem 2", () => {
  equal(
    couplet(`
      Whether or not we find what we are seeking
      Is idle, biologically speaking.
    `), // Edna St. Vincent Millay
    true
  );
});

test("not couple poem", () => {
  equal(
    couplet(`
      random
      text
      for testing
    `),
    false
  );
});
