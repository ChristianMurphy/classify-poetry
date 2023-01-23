import { test } from "node:test";
import { equal } from "node:assert/strict";
import { terzaRima } from "./terzaRima.js";

test("terza rima poem", () => {
  equal(
    terzaRima(`
      I have been one acquainted with the night.
      I have walked out in rain—and back in rain.
      I have outwalked the furthest city light.

      I have looked down the saddest city lane.
      I have passed by the watchman on his beat
      And dropped my eyes, unwilling to explain.

      I have stood still and stopped the sound of feet
      When far away an interrupted cry
      Came over houses from another street,

      But not to call me back or say goodbye;
      And further still at an unearthly height,
      One luminary clock against the sky

      Proclaimed the time was neither wrong nor right.
      I have been one acquainted with the night.
    `), // Acquainted with the Night, by Robert Frost
    true
  );
});

test("not terza rima poem", () => {
  equal(
    terzaRima(`
      random
      text
      for testing
    `),
    false
  );
});
