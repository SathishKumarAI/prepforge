---
qid: q068
question: "What is the difference between Pearson and Spearman correlation?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — Confirm both measure association between two variables and range from −1 to +1. Ask what the interviewer cares about: the linearity assumption or robustness to outliers.

**Approach** — Define each, contrast the assumptions, then say when to use which.

**Depth** — **Pearson** measures the strength of a *linear* relationship, computed as covariance over the product of standard deviations. It assumes roughly linear, continuous, normally distributed data and is sensitive to outliers. **Spearman** is Pearson's correlation applied to the *ranks* of the data. It captures any *monotonic* relationship (not just linear), works on ordinal data, and is robust to outliers and non-normality. If a relationship is monotonic but curved (e.g., exponential), Spearman can read near ±1 while Pearson underestimates it.

**Edge cases** — Both are 0 for a non-monotonic relationship like a parabola even when variables are strongly dependent. Neither implies causation. Ties affect Spearman's exact formula. A single outlier can swing Pearson dramatically.

**Optimize & communicate** — Default to Spearman for skewed, ordinal, or outlier-prone data; use Pearson when linearity holds and you want an interpretable slope. Narrate: "I'd plot the data first — if it's monotonic but nonlinear, Spearman is the honest measure." That shows you check assumptions, not just run a formula.
