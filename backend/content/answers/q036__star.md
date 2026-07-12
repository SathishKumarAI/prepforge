---
qid: q036
question: "What is the difference between L1 and L2 regularization?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** I was modeling clinical outcomes with about 800 features, many of them redundant lab measurements. The model overfit, and doctors also wanted to know which handful of features actually mattered.

**Task** I had to reduce overfitting and produce an interpretable, sparse model, which put the L1-versus-L2 choice front and center.

**Action** I explained the difference in practice. L2, ridge, adds the squared magnitude of weights to the loss, shrinking coefficients smoothly toward zero but rarely exactly to zero, so it handles correlated features gracefully. L1, lasso, adds the absolute value of weights, which drives many coefficients exactly to zero and performs automatic feature selection. Since interpretability mattered, I started with L1 to prune the feature set, then tried elastic net to combine L1's sparsity with L2's stability on the correlated labs. I tuned the regularization strength with cross-validation.

**Result** L1 cut the model to 46 meaningful features with no loss in AUC, and clinicians finally trusted it because they could see the drivers. The lesson: reach for L1 when you want sparsity and selection, L2 when you want smooth shrinkage and stability.
