import test from "ava";
import quatrain from "./quatrain";

test("quatrain poem 1", t => {
  t.true(
    quatrain(`
      The curfew tolls the knell of parting day,
      The lowing herd wind slowly o'er the lea,
      The plowman homeward plods his weary way,
      And leaves the world to darkness and to me.
    `) // Elegy Written in a Country Churchyard, by Thomas Gray
  );
});

test("quatrain poem 2", t => {
  t.true(
    quatrain(`
      Come, fill the Cup, and in the fire of Spring
      Your Winter garment of Repentance fling:
      The Bird of Time has but a little way
      To flutter—and the Bird is on the Wing
    `) // Rubaiyat of Omar Khayyam, by Edward FitzGerald
  );
});

test("not quatrain poem", t => {
  t.false(
    quatrain(`
      random
      text
      for testing
    `)
  );
});
