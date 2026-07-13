---
qid: q045
question: "What is the difference between parameters and hyperparameters, and how do you tune hyperparameters?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume a supervised model and that the interviewer wants a crisp conceptual distinction plus a practical, leakage-safe tuning workflow.

**Approach** — Define both with examples, then walk through search strategies and validation methodology.

**Depth** — Parameters are learned from data during training, the weights and biases in linear regression or a neural net, chosen by the optimizer to minimize loss. Hyperparameters are set before training and control the learning process or model capacity: learning rate, number of trees, max depth, regularization strength, k in KNN. The model doesn't learn them from the loss gradient; we search over them. Tuning strategies: grid search (exhaustive over a discrete grid), random search (often more efficient in high dimensions since few hyperparameters matter), and Bayesian optimization (models the objective to pick promising points). Each candidate is evaluated with k-fold cross-validation to estimate generalization.

**Edge cases** — Never tune on the test set, hold out a final untouched test split. Tuning on the whole dataset before splitting leaks information. Watch compute cost: grid search explodes combinatorially.

**Optimize & communicate** — I'd start with random search over sensible ranges, then refine with Bayesian methods, and use early stopping. I'd emphasize the nested validation discipline, since methodology rigor is a strong interview signal.
