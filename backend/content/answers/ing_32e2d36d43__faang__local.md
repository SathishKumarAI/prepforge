---
qid: ing_32e2d36d43__faang__local
question: 'Explain: 1.1.3. Lasso — 1.1. Linear Models \u2014 scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 623
total_tokens: 880
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:42:50-05:00'
sources: []
---

**Clarify**  
The question asks for a concise yet thorough description of *Lasso* as presented in the scikit‑learn 1.9.0 docs under “Linear Models – scikit‑learn”. I’ll assume the interviewer wants: what Lasso is, why it’s useful, how it differs from ordinary least squares (OLS), and key implementation details.

**Approach**  
I’ll outline the concept first, then discuss its objective function, regularization parameter tuning, convergence, and typical use cases. Finally, I’ll note edge‑cases that affect stability or interpretability.

---

### Depth
- **Definition:** Lasso (Least Absolute Shrinkage and Selection Operator) is a linear regression variant that adds an ℓ₁ penalty to the loss:  
  \[
  \min_\beta \; \frac{1}{2n}\|y-X\beta\|_2^2 + \alpha\,\|\beta\|_1
  \]
  The ℓ₁ term forces many coefficients exactly to zero, achieving *feature selection*.
- **Comparison to OLS:** OLS minimizes only the squared error; Lasso trades a small increase in bias for substantial variance reduction and sparsity.
- **Implementation (sklearn):** Uses coordinate‑descent (`CoordinateDescentRegressor`) with optional warm starts. Hyperparameter `alpha` controls regularization strength; `fit_intercept`, `normalize`, and `max_iter` are exposed.
- **Complexity:** Each iteration is O(nd) where n=#samples, d=#features. Convergence is usually fast (≈10–20 iterations for typical data).
- **Model selection:** Cross‑validation (`LassoCV`) selects `alpha` automatically; it uses a logarithmic grid of 100 values by default.

### Edge Cases
| Scenario | Issue | Mitigation |
|----------|-------|------------|
| Highly correlated predictors | Lasso arbitrarily picks one, instability | Use ElasticNet or group lasso |
| Very high‑dimensional sparse data (d ≫ n) | Convergence slows, risk of overfitting | Standardize, use warm starts, limit `max_iter` |
| Non‑linear relationships | Model underfits | Kernel tricks or polynomial expansion |

### Optimize & Communicate
- **Improvements:** For large d, implement *sparse* coordinate descent (sklearn already does). Parallelizing across folds in CV speeds up hyperparameter search.
- **Narrative style:** I’d explain the bias‑variance trade‑off with a quick diagram of coefficient paths versus `alpha`, then walk through a toy example showing coefficients dropping to zero. This demonstrates both conceptual grasp and practical know‑how—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
