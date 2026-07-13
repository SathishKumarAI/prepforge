---
qid: q048
question: "How does Principal Component Analysis (PCA) work?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume PCA is used for dimensionality reduction on numeric features and that the interviewer wants the variance-maximization intuition plus the linear-algebra mechanics.

**Approach** — Explain the goal, the standardize-covariance-eigendecomposition pipeline, and how components are selected.

**Depth** — PCA finds a new set of orthogonal axes (principal components) that capture the maximum variance in the data, letting us reduce dimensions with minimal information loss. Mechanically: standardize features (so scale doesn't dominate), compute the covariance matrix, then find its eigenvectors and eigenvalues (equivalently, apply SVD). Each eigenvector is a principal component, a direction in feature space; its eigenvalue is the variance explained along it. We rank components by eigenvalue and keep the top k that capture, say, 95% of cumulative variance, then project the data onto them. The result is a lower-dimensional representation where components are uncorrelated.

**Edge cases** — PCA assumes linear structure and is sensitive to scaling, so unstandardized features distort it. Components are linear combinations, so interpretability drops. Outliers skew variance. It's unsupervised, so the top components aren't guaranteed to help a downstream classifier.

**Optimize & communicate** — Use a scree plot or cumulative-variance threshold to pick k; consider kernel PCA for non-linear structure. I'd narrate the variance-vs-interpretability trade-off, showing I understand what's gained and lost.
