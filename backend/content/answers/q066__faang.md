---
qid: q066
question: "What are the main approaches to feature selection?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — Confirm the goal: reduce overfitting, speed up training, or improve interpretability. Ask about problem type (classification/regression) and dimensionality relative to sample size.

**Approach** — Organize the answer into the three canonical families, then note trade-offs.

**Depth** — **Filter methods** score features independently of any model using statistics — correlation, chi-square, mutual information, variance threshold. Fast and scalable but ignore feature interactions. **Wrapper methods** search subsets by training a model and scoring performance — forward/backward selection, recursive feature elimination (RFE). Accurate but computationally expensive and prone to overfitting the search. **Embedded methods** select during training — L1/Lasso regularization drives coefficients to zero, and tree-based importances (Random Forest, gradient boosting) rank features. These balance cost and quality.

**Edge cases** — Correlated features confuse importance measures (importance splits between them). Filter methods miss interactions; wrappers can overfit with small n. High cardinality and leakage inflate apparent importance.

**Optimize & communicate** — Combine approaches: filter cheaply first, then embedded/wrapper on the reduced set; validate with cross-validation. Consider dimensionality reduction (PCA) when interpretability isn't required. Narrate the trade-off between compute cost and capturing interactions — that structured comparison is the signal.
