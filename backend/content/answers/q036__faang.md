---
qid: q036
question: "What is the difference between L1 and L2 regularization?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — Both add a penalty on weight magnitude to the loss to curb overfitting. I'll contrast the penalty forms and their geometric consequences — sparsity vs shrinkage.

**Approach** — Give each penalty term, explain the resulting behavior, then when to pick which.

**Depth** — **L1 (Lasso)** adds `λ·Σ|wᵢ|` to the loss; **L2 (Ridge)** adds `λ·Σwᵢ²`. The key difference: L1 drives some weights **exactly to zero**, performing automatic **feature selection** and yielding sparse models. L2 shrinks weights **smoothly toward zero** but rarely to exactly zero, distributing weight across correlated features. Geometrically, L1's diamond-shaped constraint region has corners on the axes, so the optimum tends to land where coordinates are zero; L2's circular region has no corners, giving small non-zero weights. λ controls strength — larger λ means stronger penalty, more bias, less variance. L1's absolute value is non-differentiable at zero (needs subgradient/coordinate descent); L2 is smooth with a closed-form ridge solution.

**Edge cases** — With correlated features L1 arbitrarily picks one and zeros the rest; L2 keeps both, shrunk. Neither substitutes for feature scaling — penalties are scale-sensitive.

**Optimize & communicate** — **Elastic Net** combines both to get sparsity plus stability. Use L1 when you want interpretability/selection, L2 for general shrinkage with correlated predictors. Signal: I tie the math (diamond vs circle) to the observable outcome (sparse vs shrunk).
