import { test } from "uvu";
import { is } from "uvu/assert";
import { quatrain } from "./quatrain.js";

test("quatrain poem 1", () => {
  is(
    quatrain(`
      The curfew tolls the knell of parting day,
      The lowing herd wind slowly o'er the lea,
      The plowman homeward plods his weary way,
      And leaves the world to darkness and to me.
    `), // Elegy Written in a Country Churchyard, by Thomas Gray
    true
  );
});

test("quatrain poem 2", () => {
  is(
    quatrain(`
      Come, fill the Cup, and in the fire of Spring
      Your Winter garment of Repentance fling:
      The Bird of Time has but a little way
      To flutter—and the Bird is on the Wing
    `), // Rubaiyat of Omar Khayyam, by Edward FitzGerald
    true
  );
});

test("not quatrain poem", () => {
  is(
    quatrain(`
      random
      text
      for testing
    `),
    false
  );
});

test.run();
