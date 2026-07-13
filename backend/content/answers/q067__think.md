---
qid: q067
question: "What is skewness, and how do you deal with skewed features?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Separate two sub-questions: what skewness *is* (a shape statistic) and what to *do* about it (preprocessing). Assume a continuous, positive-valued feature unless told otherwise, since that shapes which transform applies.
2. **Mental model.** Anchor on the mean-vs-median relationship: right skew means a long right tail with mean > median; left skew is the mirror; zero skew is symmetric like the normal. Picture the tail pointing where the skew name points.
3. **Reason step by step.** Explain why it matters — linear and distance-based models and many tests assume rough symmetry, and outliers in the tail dominate. Then give a remedy ladder: log/log1p for right-skewed positives, sqrt or Box-Cox/Yeo-Johnson, winsorizing extremes, robust summaries (median), or tree models that ignore monotonic transforms.
4. **Traps to dodge.** Do not confuse skewness (asymmetry) with spread/variance. Do not log-transform data with zeros or negatives without log1p or Yeo-Johnson. Do not claim the normal distribution is skewed.
5. **Sanity-check and communicate.** After transforming, re-plot the histogram and recompute the skewness value to confirm it moved toward symmetry — and always fit the transform on training data. State the definition, then the fix, matched to the data type.
