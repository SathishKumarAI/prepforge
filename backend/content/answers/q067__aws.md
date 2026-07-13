---
qid: q067
question: "What is skewness, and how do you deal with skewed features?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd tie this to **Dive Deep**: skew quietly breaks models and summaries, so I diagnose it early. Skewness measures asymmetry. Right (positive) skew has a long right tail, mean pulled above median, common in revenue, income, latency; left skew is the mirror. I detect it with the skewness statistic, a histogram, or a big gap between mean and median.

Why I care and what I do: skew distorts mean-based summaries, violates normality assumptions, and lets extreme values dominate distance- and gradient-based models. Fixes I apply: a log transform (or log1p for zeros) for right-skewed positive data, square-root or Box-Cox/Yeo-Johnson for a principled choice, or binning; and for reporting I switch to the median. I'd give a concrete example: log-transforming a heavily skewed transaction-amount feature made a linear model's residuals well-behaved and lifted validation R-squared meaningfully, while also stabilizing an over-influential outlier. I fit the transform on training data only to avoid leakage, in a SageMaker or Glue step. A bar-raiser listens for whether you detect skew quantitatively, pick a transform for a reason rather than reflexively logging everything, and remember to report the median instead of a misleading mean.
