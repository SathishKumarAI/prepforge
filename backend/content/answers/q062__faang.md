---
qid: q062
question: "What are Type I and Type II errors?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — These are the two ways a hypothesis test can be wrong. Confirm we're framing around a null hypothesis H0 and an alternative H1, and whether the interviewer wants definitions or the practical trade-off.

**Approach** — Lay out the 2x2 decision matrix (reject/don't-reject vs. H0 true/false), name each error, then connect to α, β, and power.

**Depth** — A Type I error (false positive) is rejecting H0 when it is actually true; its probability is α, the significance level. A Type II error (false negative) is failing to reject H0 when H1 is true; its probability is β, and statistical power = 1 − β. Lowering α to avoid false positives raises β, missing real effects — a fundamental tension.

**Edge cases** — Context dictates which is worse: for a disease screen, a false negative (Type II) is dangerous; for a spam filter, a false positive (Type I) blocks real mail. Small samples inflate β.

**Optimize & communicate** — Increase sample size or effect size to reduce both errors simultaneously; run a power analysis before collecting data. Narrate the domain cost: "Here false negatives are costlier, so I'd raise α and prioritize power." That framing signals real-world judgment.
