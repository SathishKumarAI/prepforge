---
qid: q099
question: "In an analytics context, how do you know if a change in a metric is statistically significant or just noise?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm whether this is a controlled A/B test or an observed shift in a live metric, since the rigor differs, and ask what decision hinges on the answer.

**Approach** — Frame it as hypothesis testing: define the null, pick a test, check the p-value and confidence interval against a pre-set threshold, and guard against common traps.

**Depth** — Set a null hypothesis (no real change) and choose a significance level (α, commonly 0.05) *before* looking. Pick the right test: two-proportion z-test for conversion rates, t-test for means, chi-square for categorical distributions. A small **p-value** means the observed difference is unlikely under pure chance, so you reject the null. Equally, report the **confidence interval** on the effect — if it excludes zero (or the practical threshold), the effect is credible, and its width shows precision. **Statistical power** and adequate sample size matter: tiny samples make real effects undetectable and random blips look dramatic. Crucially, distinguish statistical significance from **practical significance** — a 0.01% lift can be "significant" yet worthless.

**Edge cases** — Peeking/early-stopping inflates false positives; multiple-comparison problems need correction; seasonality/day-of-week confounds; non-independent samples; and outliers skewing means.

**Optimize & communicate** — I'd pre-register the metric and duration, run to the planned sample size, and report effect size with its CI, not just "significant." Explaining that I ask "is it real *and* big enough to act on" signals the statistical maturity interviewers score.
