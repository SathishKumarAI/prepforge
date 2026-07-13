---
qid: q040
question: "How does a decision tree decide where to split?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume a CART-style tree and explain how it greedily chooses splits to maximize purity, covering both classification and regression criteria.

**Approach** — Describe the greedy search over features and thresholds, define the impurity criteria, then discuss stopping and overfitting.

**Depth** — At each node the tree evaluates **every feature and candidate threshold**, splitting the data into two children, and picks the split that most **reduces impurity** — the greedy, locally optimal choice — then recurses. For **classification**, impurity is **Gini** `1−Σpᵢ²` or **entropy** `−Σpᵢ log pᵢ`; the split maximizing **information gain** (weighted impurity drop) wins. For **regression**, it minimizes **variance / MSE** of the target within children. The goal each step: children purer than the parent. This continues until a stopping rule fires — max depth, min samples per leaf, or no further impurity gain.

**Edge cases** — Grown unrestricted, trees **overfit** badly (memorize training data — high variance). They're **greedy**, so they can miss globally better splits. Biased toward high-cardinality features (info gain favors many splits — use gain ratio). Small data changes can flip the tree (instability).

**Optimize & communicate** — Control overfitting via **pruning**, depth/leaf limits, and prefer **ensembles** — random forests (bagging) or gradient boosting — which average away the variance. Signal: I name the impurity math and immediately flag greediness and overfitting as why we ensemble.
