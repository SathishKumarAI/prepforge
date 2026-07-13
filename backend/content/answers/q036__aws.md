---
qid: q036
question: "What is the difference between L1 and L2 regularization?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd contrast the geometry and the effect, then tie it to a decision I owned — **Dive Deep**. Both add a penalty on weight magnitude to the loss to fight overfitting. L1 (Lasso) penalizes the sum of absolute weights; its diamond-shaped constraint drives some coefficients exactly to zero, so it performs feature selection and yields sparse, interpretable models. L2 (Ridge) penalizes the sum of squared weights; it shrinks coefficients smoothly toward zero but rarely to exactly zero, and it handles correlated features more gracefully. Elastic Net blends both.

I'd make the choice concrete: "With 400 candidate features but a need to explain the model to compliance, I used L1 to cut it to ~30 non-zero features with almost no AUC loss — a maintainable, auditable model." That's **Invent and Simplify**: fewer features, lower serving cost, easier ownership. When features were highly correlated and I cared about accuracy over sparsity, I chose L2.

The regularization strength (lambda) is a hyperparameter I tune by cross-validation. On AWS, SageMaker Linear Learner exposes L1/L2 knobs directly.

A bar-raiser listens for whether I pick based on the actual goal — sparsity/interpretability vs. stability — not just recite the math.
