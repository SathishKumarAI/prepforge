---
qid: q099
question: "In an analytics context, how do you know if a change in a metric is statistically significant or just noise?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Ask whether this is a controlled experiment (A/B test) or an observational time-series shift — the rigor differs sharply. Clarify the metric type (rate vs continuous) and sample size. State the assumption.
2. **Mental model.** Signal must exceed noise. Every metric has natural variability; significance testing asks whether the observed change is larger than what randomness alone would plausibly produce.
3. **Reason step by step.** For an A/B test: state a null hypothesis (no difference), pick a test (two-proportion z-test for conversion rates, t-test for means), compute a p-value and a **confidence interval** on the difference, and check it against a pre-set significance level (α = 0.05) and adequate power/sample size decided *before* peeking. Emphasize effect size and the CI, not just the p-value. For an observational shift, compare against historical variance/control charts and account for seasonality and trend before calling it real.
4. **Traps to avoid.** Peeking and stopping early (inflates false positives); multiple comparisons without correction; confusing statistical with *practical* significance; ignoring sample size; and reading a p-value as the probability the effect is real.
5. **Sanity-check and deliver.** Ask "would this survive a proper holdout and does the CI exclude zero?" Communicate as: observed change, confidence interval, whether it clears the pre-set bar, and whether the effect size actually matters to the business.
