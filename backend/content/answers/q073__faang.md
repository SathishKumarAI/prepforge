---
qid: q073
question: "What is bootstrapping and when is it useful?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — Confirm we mean the statistical resampling method (not devops bootstrapping). Ask whether the interest is estimating uncertainty of a statistic or comparing groups.

**Approach** — Describe the procedure, explain why it works, then give the use cases and limits.

**Depth** — Bootstrapping estimates the sampling distribution of a statistic by resampling the observed data *with replacement* many times (typically 1,000–10,000). For each resample of size n, we recompute the statistic; the spread of those estimates approximates its standard error, and their percentiles give a confidence interval. It works because the empirical distribution stands in for the unknown population. It shines when the statistic has no closed-form variance (median, correlation, ratios, a model's AUC) or when data are non-normal and small, where CLT-based formulas are unreliable.

**Edge cases** — It cannot invent information — it fails for extreme-order statistics like the maximum, and for heavily dependent data (time series need block bootstrap). Very small n gives unstable, over-optimistic intervals. It assumes the sample represents the population.

**Optimize & communicate** — Use the BCa (bias-corrected accelerated) interval for skewed statistics, and enough resamples for stable percentiles. Narrate: "When I can't derive a variance analytically, bootstrapping lets the data quantify its own uncertainty." That captures both the power and the assumptions.
