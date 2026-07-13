---
qid: q061
question: "What is a p-value and how do you interpret it?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — Confirm the framing: we assume a null hypothesis (H0) and a test statistic. Ask whether the interviewer wants the definition, common misinterpretations, or how it drives a decision.

**Approach** — Define it precisely, state what it is *not*, then show how it fits a hypothesis test.

**Depth** — A p-value is the probability of observing data at least as extreme as what we saw, *assuming H0 is true*. Formally, `P(T ≥ t_obs | H0)`. It is computed from the null sampling distribution. We compare it to a pre-chosen significance level α (e.g., 0.05); p < α means we reject H0. It quantifies incompatibility with the null, not the probability the null is true.

**Edge cases** — It is NOT `P(H0 | data)`, not effect size, and not proof of the alternative. Large samples make tiny, meaningless effects "significant"; small samples miss real ones. P-hacking and multiple testing inflate false positives.

**Optimize & communicate** — Always report effect size and confidence intervals alongside the p-value; pre-register α. Narrate the reasoning: "Under H0, this result is unlikely, so the data provide evidence against it" — signaling you understand conditionality, not just the threshold.
