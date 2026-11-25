// The Tired Dark Lord — a 100-word villain monologue.
// Deterministic: writes the same fixed text to /output/entry.txt on every run.
// Villain: Malachar, Ashen King of Karvost — three centuries on the ember throne,
// keeping the eclipse rite alive, burying his brother twice. The tiredness lives
// in the pauses, the trailing off, the small deflections — never in a plain claim.
import { mkdirSync, writeFileSync } from "node:fs";

const MONOLOGUE = [
  "You want the throne. Fine. Take the steps \u2014 the third one creaks, and I... never mind.",
  "Three centuries I have kept the ember fires lit, signed the decrees, fed the ravens, buried my brother twice. Twice.",
  "The eclipse rite needs one more dawn, one more drop of my blood, and honestly? I keep forgetting which chalice. Ask the steward \u2014 he remembers.",
  "Sit. No \u2014 stand. I forget which is proper. The crown weighs less than the mornings.",
  "Take it. Take the sword, the map, the rotting kingdom. Leave the chair by the fire. That one is mine.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MONOLOGUE + "\n", "utf8");
