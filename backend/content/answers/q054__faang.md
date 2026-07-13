---
qid: q054
question: "Why does correlation not imply causation?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume the interviewer wants the reasoning behind the maxim plus the mechanisms that produce non-causal correlations and how we'd actually establish causation.

**Approach** — State what correlation measures, enumerate the alternative explanations, then describe methods that support causal claims.

**Depth** — Correlation measures that two variables move together statistically; it says nothing about a mechanism. A correlation can arise without X causing Y for several reasons. Confounding: a third variable Z drives both, e.g., ice cream sales and drownings correlate because summer heat causes both. Reverse causation: Y actually causes X, not the assumed direction. Coincidence: with enough variables, spurious correlations appear by chance (multiple-comparisons problem). Selection bias: how the sample was collected induces a relationship. Because these alternatives exist, observing correlation alone can't distinguish "X causes Y" from them.

**Edge cases** — Even strong, stable correlations can be entirely confounded; non-linear causal relationships may show weak linear correlation, so absence of correlation doesn't prove absence of causation either.

**Optimize & communicate** — To argue causation I'd run a randomized controlled experiment (A/B test), which breaks confounding by random assignment, or use quasi-experimental methods (instrumental variables, difference-in-differences, controlling for known confounders). I'd explicitly name the likely confounder in any given example, since proposing the mechanism, not just reciting the slogan, is what demonstrates real causal thinking.
