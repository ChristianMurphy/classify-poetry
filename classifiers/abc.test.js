import { test } from "uvu";
import { is } from "uvu/assert";
import { abc } from "./abc.js";

test("abc poem", () => {
  is(
    abc(`
      a poem
      becoming a test
      case
    `),
    true
  );
});

test("not abc poem", () => {
  is(
    abc(`
      random
      text
      for testing
    `),
    false
  );
});

test.run();
