---
qid: q042
question: "How does gradient boosting differ from bagging (random forests)?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume both are tree ensembles and the interviewer wants the core mechanism difference plus practical trade-offs, framed through bias-variance.

**Approach** — Contrast how trees are built (parallel vs sequential), what each targets (variance vs bias), then discuss tuning and robustness.

**Depth** — Bagging (random forests) builds many deep, independent trees in parallel on bootstrap samples, then averages them. Deep trees have low bias but high variance; averaging decorrelated trees reduces variance. Gradient boosting builds shallow trees sequentially, where each new tree fits the negative gradient of the loss (the residual errors) of the current ensemble, added with a small learning rate. This primarily reduces bias, incrementally correcting mistakes. So bagging parallelizes and fights variance; boosting is additive and fights bias.

**Edge cases** — Boosting can overfit noisy data or outliers because it keeps chasing hard examples; forests are more robust and harder to break. Boosting is sequential, so slower to train and sensitive to learning-rate/n_estimators interplay.

**Optimize & communicate** — For boosting, tune learning rate, tree depth, and use early stopping and subsampling (stochastic GB); XGBoost/LightGBM add regularization. I'd state the one-line summary, "forests average independent strong learners, boosting sums dependent weak learners," to show I grasp the underlying principle.
