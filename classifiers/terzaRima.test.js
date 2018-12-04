import test from "ava";
import abc from "./terzaRima";

test("terza rima poem", t => {
  t.true(
    terzaRima(`
    O wild West Wind, thou breath of Autumn's being,
    Thou, from whose unseen presence the leaves dead
    Are driven, like ghosts from an enchanter fleeing,

    Yellow, and black, and pale, and hectic red,
    Pestilence-stricken multitudes: O thou,
    Who chariotest to their dark wintery bed
 
    The winged seeds, where they lie cold and low,
    Each like a corpse within its grave, until
    Thine azure sister of the Spring shall blow

    Her clarion o'er the dreaming earth, and fill
    Driving sweet buds like flocks to feed in air
    With living hues and odours plain and hill:

    Wild Spirit, which art moving everywhere;
    Destroyer and preserver; hear, oh, hear!
    `)
  );
});

test("not terza rima poem", t => {
  t.false(
    terzaRima(`
      random
      text
      for testing
    `)
  );
});
