---
qid: ing_69c359de50__faang__local
question: 'Explain: 1.1.1. Ordinary Least Squares — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 508
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:49:35-05:00'
sources: []
---

## 1.1.1 Ordinary Least Squares (OLS) – Linear Models in **scikit‑learn**  

### Clarify  
*Explain OLS and how scikit‑learn implements it.*  
Assumptions to confirm: data is linear, errors are i.i.d. Gaussian with zero mean, homoscedasticity, no multicollinearity, features scaled appropriately.

### Approach  
1. **Model formulation**: \(y = X\beta + \epsilon\).  
2. **Objective**: minimize the residual sum of squares (RSS) \(\|y - X\beta\|_2^2\).  
3. **Solution**: closed‑form \(\hat{\beta} = (X^\top X)^{-1}X^\top y\) or via QR/Cholesky for numerical stability.  
4. **scikit‑learn**: `LinearRegression` (no regularization), `Ridge`, `Lasso`, `ElasticNet`.  

### Depth  
- `LinearRegression()` uses a *least squares* solver that chooses between `np.linalg.lstsq`, QR, or SVD based on matrix shape and conditioning.  
- Complexity: \(O(np^2)\) for dense matrices (n samples, p features).  
- Handles intercept separately (`fit_intercept=True`).  
- Supports sparse inputs via `sparse.linalg.spsolve`.  

### Edge Cases  
- **Singular \(X^\top X\)** → use regularization (`Ridge`) or drop collinear columns.  
- **Large‑scale data** → `SGDRegressor` for stochastic gradient descent.  
- **Non‑numeric features** → must be encoded (e.g., one‑hot) before fitting.  

### Optimize & Communicate  
- For very high dimensionality, prefer `Ridge` or `Lasso` to avoid overfitting and improve numerical stability.  
- When \(n \ll p\), use SVD to compute pseudoinverse efficiently.  
- Highlight that scikit‑learn abstracts solver selection; you can force a particular algorithm via `solver='sag'`, `liblinear`, etc., for specialized scenarios.  

This structured explanation covers theory, implementation, complexity, and practical pitfalls—key points interviewers expect from a FAANG candidate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
