---
qid: ing_f9966f5c5f__fp__local
question: 'Explain: Python Code — Ridge and Lasso Regression in Python - Analytics
  Vidhya'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 577
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:50:15-05:00'
sources: []
---

**Why Ridge & Lasso?**  
We want a linear model \(y=X\beta + \varepsilon\) that generalises well. Ordinary Least Squares (OLS) minimizes  

\[
L_{\text{OLS}}(\beta)=\|y-X\beta\|_2^2 ,
\]

but when predictors are correlated or the number of features \(p\) is close to the sample size \(n\), OLS estimates become unstable—variance explodes.  
Ridge and Lasso add *regularisation* terms that penalise large coefficients, shrinking them toward zero and thus reducing variance at a controlled cost in bias.

**Mathematical form**

| Method | Objective |
|--------|-----------|
| Ridge  | \(\displaystyle \min_{\beta}\;\|y-X\beta\|_2^2+\lambda\|\beta\|_2^2\) |
| Lasso  | \(\displaystyle \min_{\beta}\;\|y-X\beta\|_2^2+\lambda\|\beta\|_1\) |

The λ parameter balances fit and penalty. Ridge’s \(L_2\) norm keeps all coefficients small but non‑zero; Lasso’s \(L_1\) norm forces many to be exactly zero, performing variable selection.

**Python implementation (scikit‑learn)**  

```python
from sklearn.linear_model import Ridge, Lasso

# Fit models
ridge = Ridge(alpha=λ).fit(X_train, y_train)
lasso = Lasso(alpha=λ, max_iter=10000).fit(X_train, y_train)

# Predictions & evaluation
y_pred_ridge = ridge.predict(X_test)
y_pred_lasso = lasso.predict(X_test)
```

- `alpha` ≡ λ (scaled by 1/(2n) in scikit‑learn).
- For Lasso, we often increase `max_iter` because the coordinate‑descent algorithm may need many passes.

**Deeper insight**  
Regularisation can be viewed as placing a *prior* on coefficients: Ridge corresponds to a Gaussian prior (encouraging smoothness), while Lasso uses a Laplace prior (sparsity). In Bayesian terms, we are performing MAP estimation under different assumptions about the underlying signal.  

**Non‑obvious tip:**  
When tuning λ, cross‑validation should be performed *after* standardising features; otherwise Ridge will favour variables with larger scales and Lasso may drop them entirely. This subtle preprocessing step can change which predictors survive in a high‑dimensional setting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
