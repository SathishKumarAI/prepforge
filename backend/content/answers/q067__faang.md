---
qid: q067
question: "What is skewness, and how do you deal with skewed features?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — Confirm we mean distributional skew of a numeric feature (asymmetry), and ask why it matters for the model at hand — linear models and distance-based methods are sensitive; tree models are largely not.

**Approach** — Define skewness, explain why it hurts, then list remedies in order of preference.

**Depth** — Skewness measures asymmetry of a distribution. Positive (right) skew has a long right tail with mean > median (e.g., income); negative (left) skew is the opposite. It violates the normality assumptions of linear/logistic regression, distorts distance metrics, and lets outliers dominate. Remedies: **log transform** for positive skew and multiplicative data; **square-root** for milder skew or counts; **Box-Cox** (positive values) or **Yeo-Johnson** (handles zeros/negatives) to find an optimal power; **binning** or **rank/quantile** transforms; and robust scaling.

**Edge cases** — Log(0) is undefined — add a constant or use log1p. Transforms hurt interpretability and must be applied consistently across train/test. Tree-based models don't need them since they split on thresholds.

**Optimize & communicate** — Fit the transform on training data only to avoid leakage, and compare model performance with/without. Narrate: "I'd check skewness numerically, then pick a transform matched to the data's sign and the model's sensitivity." That shows deliberate, model-aware reasoning.
