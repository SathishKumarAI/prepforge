---
qid: q041
question: "How does a random forest work and why is it better than a single decision tree?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume a supervised classification/regression setting and that the interviewer wants both the mechanics and the variance-reduction intuition, not just a definition.

**Approach** — I'll explain the two randomness sources, how predictions aggregate, then contrast with a lone tree via the bias-variance lens.

**Depth** — A random forest is an ensemble of many decision trees trained with two forms of randomization. First, bagging: each tree trains on a bootstrap sample (sampling rows with replacement). Second, at each split only a random subset of features is considered (typically sqrt(p) for classification). Predictions aggregate by majority vote (classification) or averaging (regression). A single deep tree has low bias but high variance, it overfits noise. Averaging many decorrelated trees keeps bias roughly constant while slashing variance, so generalization improves. Feature subsampling is key: it decorrelates trees so one dominant feature doesn't make them identical.

**Edge cases** — Highly correlated features inflate importance; extremely imbalanced classes still need weighting; forests extrapolate poorly beyond training range for regression.

**Optimize & communicate** — Tune n_estimators, max_depth, max_features; use out-of-bag error for free validation. I'd narrate the variance-reduction reasoning explicitly, since that "why" is the signal interviewers reward over rote memorization.
