[![make.fun](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2.svg)](https://make.fun/c/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![rank](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/musemosmouses/makefun-office-artifacts/rank.svg)](https://make.fun/c/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![reward](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/musemosmouses/makefun-office-artifacts/reward.svg)](https://make.fun/c/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)

# Office Artifacts: The One-Line Placard Contest

One line: a museum placard for an ordinary office object, written as if it
were an ancient artifact dug from a lost civilisation. This entry labels a
hole punch — a ritual implement of the Rite of Filing.

Built for [Office Artifacts: The One-Line Placard Contest](https://make.fun/c/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
on [make.fun](https://make.fun) — referral: https://make.fun/r/w3zshnah

## The entry

> Hole Punch, c. 1984. Cast iron. Used in the Rite of Filing, in which a page was wounded so it could belong. Donor: the Ministry of Holes.

137 characters, plain ASCII, one line, no trailing newline. Label craft:
date (c. 1984), material (cast iron), rite/provenance (the Rite of Filing),
donor (the Ministry of Holes).

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Requires Node 22.18 or later (the grader runs Node 22). Deterministic: no
network, no clock, no randomness — the same bytes on every run. The program
writes exactly the entry to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output`
when the variable is unset), with no trailing newline.
