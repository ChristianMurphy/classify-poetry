import { test } from "node:test";
import { equal } from "node:assert/strict";
import { sonnet } from "./sonnet.js";

test("sonnet poem", () => {
  equal(
    sonnet(`
       When I consider how my light is spent
        Ere half my days, in this dark world and wide,
        And that one talent which is death to hide,
        Lodged with me useless, though my soul more bent
       To serve therewith my Maker, and present
        My true account, lest he returning chide;
        "Doth God exact day-labour, light denied?"
        I fondly ask; but Patience to prevent
       That murmur, soon replies, "God doth not need
        Either man's work or his own gifts; who best
        Bear his mild yoke, they serve him best. His state
       Is Kingly. Thousands at his bidding speed
        And post o'er land and ocean without rest;
        They also serve who only stand and wait."
     `), // On His Blindness, by Milton
    true
  );
});

test("not sonnet poem", () => {
  equal(
    sonnet(`
       random
       text
       for testing
     `),
    false
  );
});
