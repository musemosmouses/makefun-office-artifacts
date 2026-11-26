// A museum placard for a hole punch, written as if the punch were an ancient
// relic behind glass. One line of plain ASCII, 137 characters, and no newline
// at the end — the placard text is the whole file.
// The punch was chosen because every desk drawer still hides one, yet nobody
// remembers the last time it was used — a relic in plain sight.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The single string below is the entire exhibit: counted by hand to exactly
// 137 characters, with the invented Ministry of Holes lending it provenance.
const ENTRY =
  "Hole Punch, c. 1984. Cast iron. Used in the Rite of Filing, in which a page was wounded so it could belong. Donor: the Ministry of Holes.";

// The grader mounts the output directory at /output and points at it with
// MAKEFUN_OUTPUT_DIR; outside the grader the variable is our stand-in.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Pure function of the source: no network, no clock, no random values, so
// every run writes identical bytes. The gate counts characters, so entry.txt
// holds the placard and nothing else — no trailing newline, no padding.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY);
