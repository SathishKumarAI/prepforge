---
qid: q028
question: "Why do we split data into training, validation, and test sets?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume supervised learning and explain the distinct role of each split. The core idea: estimate generalization honestly and avoid leaking information.

**Approach** — Assign one purpose per split, then explain why conflating them corrupts the estimate.

**Depth** — The **training set** fits model parameters (weights). The **validation set** tunes hyperparameters and guides model selection — learning rate, depth, early stopping — without touching training weights directly. The **test set** is used *once*, at the very end, to estimate real-world generalization on truly unseen data. The reason for three: if we selected hyperparameters on the test set, we'd indirectly fit to it, and our reported performance would be optimistically biased — the test set would no longer be "unseen." Validation absorbs the repeated peeking during development; test stays pristine. A rough split is 60/20/20 or 80/10/10, scaled by dataset size.

**Edge cases** — Data leakage (scaling before splitting, or temporal features), non-IID/time-series data (must split chronologically), and class imbalance (use stratified splits). Small datasets make a fixed validation set noisy.

**Optimize & communicate** — With limited data I'd use k-fold cross-validation instead of a fixed validation set, reserving a separate test set. Signal: I understand each split guards against a specific form of optimistic bias, and I respect the test set as a one-time measurement.
