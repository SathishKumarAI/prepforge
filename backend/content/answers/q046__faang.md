---
qid: q046
question: "Explain Support Vector Machines and the kernel trick."
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume binary classification and that the interviewer wants the margin intuition, the soft-margin extension, and why the kernel trick is computationally clever.

**Approach** — Build from the max-margin hyperplane to support vectors, then motivate kernels for non-linear data.

**Depth** — An SVM finds the hyperplane that separates classes with the maximum margin, the largest distance to the nearest points of either class. Those nearest points are the support vectors; they alone define the boundary, making SVMs memory-efficient. Maximizing the margin improves generalization. Real data isn't perfectly separable, so soft-margin SVM adds slack variables and a regularization parameter C that trades margin width against misclassifications. For non-linear boundaries, we'd map data into a higher-dimensional space where it becomes linearly separable, but computing those coordinates is expensive. The kernel trick avoids it: because the optimization depends only on dot products between points, a kernel function (RBF, polynomial) computes the dot product in the high-dimensional space directly, without ever materializing the mapping.

**Edge cases** — SVMs scale poorly to very large datasets (roughly quadratic-to-cubic); RBF's gamma and C need careful tuning to avoid overfitting; features must be scaled first.

**Optimize & communicate** — I'd grid-search C and gamma with cross-validation. I'd stress the dot-product insight, since articulating why the kernel trick works signals real depth.
