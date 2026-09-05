---
qid: ing_0857652c9f__fp__local
question: 'Explain: Regularization Techniques — Ridge and Lasso Regression in Python
  - Analytics Vidhya'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 487
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:23:24-05:00'
sources: []
---

**Regularization – the “penalty” that keeps models sane**

When a linear model \( \hat y = X\beta \) is fit to data, we solve  

\[
\min_{\beta}\;\|y-X\beta\|_2^2 .
\]

If the design matrix \(X\) has more columns than rows or contains highly correlated predictors, this problem becomes ill‑posed: many \(\beta\)’s achieve the same training error.  The solution is not unique and the model overfits – it memorises noise rather than signal.

*Ridge* adds an ℓ₂ penalty to the loss:

\[
\min_{\beta}\;\|y-X\beta\|_2^2 + \lambda\|\beta\|_2^2 .
\]

The ℓ₂ term shrinks coefficients toward zero but never exactly to zero.  Geometrically, it “inflates” the feasible set into a sphere, so the intersection with the data‑fitting ellipsoid is unique and stable.  Algebraically, it’s equivalent to adding \(\lambda I\) to \(X^TX\), improving its conditioning.

*Lasso* replaces the ℓ₂ norm with an ℓ₁ penalty:

\[
\min_{\beta}\;\|y-X\beta\|_2^2 + \lambda\|\beta\|_1 .
\]

The ℓ₁ ball has sharp corners; the optimal solution often lands on a corner, forcing some coefficients exactly to zero.  This yields automatic feature selection.  The trade‑off is that the objective is no longer differentiable everywhere, so we use coordinate descent or subgradient methods in Python (`sklearn.linear_model.Lasso`).

**Non‑obvious insight:**  
Both penalties are *convex* but have different geometry: ℓ₂ distributes shrinkage evenly (good for multicollinearity), whereas ℓ₁ concentrates it on few variables.  A subtle consequence is that **Ridge can outperform Lasso when predictors are highly correlated, because the ℓ₂ penalty encourages them to share weight rather than arbitrarily discarding one** – a fact many overlook in feature‑selection‑driven tutorials.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
