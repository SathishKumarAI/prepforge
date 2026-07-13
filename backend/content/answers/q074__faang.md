---
qid: q074
question: "What is the multiple comparisons problem and how do you correct for it?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — Confirm the setting: many hypothesis tests run together (e.g., many metrics, many variants, or many genes). Ask whether the goal is to control the family-wise error rate or the false discovery rate.

**Approach** — Explain the inflation of false positives, then give correction methods matched to the goal.

**Depth** — Each test at α = 0.05 has a 5% false-positive chance. Run m independent tests and the probability of at least one false positive is `1 − (1 − 0.05)^m` — for 20 tests that's ~64%. So testing many hypotheses almost guarantees spurious "significant" results. Corrections: **Bonferroni** uses threshold α/m — simple but conservative, controlling the family-wise error rate (FWER), the chance of *any* false positive. **Holm** is a stepwise, uniformly more powerful FWER method. **Benjamini-Hochberg** controls the false discovery rate (FDR) — the expected *fraction* of false positives among rejections — far more powerful when many tests are expected to be true.

**Edge cases** — Bonferroni over-corrects and tanks power with large m. BH assumes independence or positive dependence. Peeking in A/B tests is a hidden multiple-comparisons problem.

**Optimize & communicate** — Use FWER (Holm/Bonferroni) when any false positive is costly; use FDR (BH) for exploratory, high-dimensional screens. Narrate: "I'd pick the correction by the cost of a false discovery" — that judgment is the signal.
