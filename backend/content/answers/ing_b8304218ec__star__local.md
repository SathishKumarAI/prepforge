---
qid: ing_b8304218ec__star__local
question: 'Explain: 1.1.2.3. Ridge Complexity — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 409
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:39:45-05:00'
sources: []
---

**Situation:**  
While working on a credit‑risk scoring project for a fintech startup, our team had to build a model that could predict loan default probability from 300 customer features. The initial Lasso run produced unstable coefficients and overfitting on the training set (R² = 0.78) while validation performance dropped sharply.

**Task:**  
I needed to implement Ridge regression, tune its regularization strength, and quantify how complexity changes with the alpha parameter so we could balance bias–variance trade‑off and achieve a robust model (target validation R² ≥ 0.70).

**Action:**  
Using scikit‑learn 1.9.0, I set up a Pipeline with `StandardScaler` → `Ridge(alpha=α)`. I then performed a grid search over α ∈ {0.01, 0.1, 1, 10, 100} while monitoring the effective degrees of freedom (trace of the hat matrix) to interpret model complexity. I plotted coefficient paths versus log(α), noting that as α increased, coefficients shrank smoothly toward zero but without the abrupt sparsity seen in Lasso. I also examined the ridge penalty term λ‖w‖² and its influence on the loss function’s curvature.

**Result:**  
Choosing α = 10 yielded a validation R² of 0.72 with only ~80 non‑zero coefficients, reducing overfitting by 15% relative to Lasso. The effective degrees of freedom dropped from 300 to about 120, confirming lower model complexity. I learned that Ridge’s continuous shrinkage provides a more stable solution when many correlated features exist, and scikit‑learn’s `alpha` parameter directly controls this trade‑off through the penalty term in the loss function.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
