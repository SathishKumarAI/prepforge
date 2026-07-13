---
qid: q043
question: "What is feature scaling and which algorithms need it?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume numeric features on different scales and that the interviewer wants the definition, the methods, and crucially which algorithms are sensitive and why.

**Approach** — Define scaling, list the two common transforms, then reason from each algorithm's math about who needs it.

**Depth** — Feature scaling transforms features to comparable ranges. Standardization subtracts the mean and divides by standard deviation (zero mean, unit variance); min-max normalization rescales to [0,1]. Algorithms that depend on distances or gradients need it. Distance-based methods (KNN, K-means, SVM with RBF) let large-magnitude features dominate the metric. Gradient-descent models (linear/logistic regression, neural networks) converge faster and more stably when features share scale. PCA needs scaling because it maximizes variance, and unscaled features inflate that variance. Tree-based models (decision trees, random forests, gradient boosting) do NOT need scaling, they split on thresholds, which are invariant to monotonic rescaling.

**Edge cases** — Fit the scaler on training data only, then apply to test/production to avoid leakage. Min-max is sensitive to outliers; use robust scaling (median/IQR) when outliers exist. Handle sparse data carefully to preserve sparsity.

**Optimize & communicate** — Wrap scaling in a pipeline so it's applied consistently. I'd explicitly tie the "who needs it" answer to each algorithm's objective, showing reasoning rather than a memorized list.
