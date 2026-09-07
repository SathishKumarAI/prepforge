---
qid: ing_8a423f67db__faang__local
question: 'Explain: Ridge and Lasso Regression in Python — Ridge and Lasso Regression
  in Python - Analytics Vidhya'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 540
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:05:41-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of **Ridge (ℓ₂) and Lasso (ℓ₁) regression**, how they differ, why we use them in Python, and what the key hyper‑parameters are.

**Approach**  
1. Define ordinary least squares (OLS).  
2. Introduce regularization terms → Ridge adds λ‖β‖²₂, Lasso adds λ‖β‖₁.  
3. Show how to fit them with `sklearn.linear_model` (`Ridge`, `Lasso`).  
4. Highlight practical effects: Ridge shrinks coefficients; Lasso performs feature selection.

**Depth**  
```python
from sklearn.linear_model import Ridge, Lasso
X_train, X_test, y_train, y_test = train_test_split(X, y)

ridge = Ridge(alpha=1.0)   # λ = alpha
lasso = Lasso(alpha=0.1)

ridge.fit(X_train, y_train)
lasso.fit(X_train, y_train)

print(ridge.coef_, lasso.coef_)
```
- **Ridge**: minimises  
  \[
  ||y-Xβ||²₂ + λ||β||²₂
  \]  
  → all coefficients are shrunk but remain non‑zero; good for multicollinearity.  
- **Lasso**: minimises  
  \[
  ||y-Xβ||²₂ + λ||β||₁
  \]  
  → some coefficients become exactly zero, yielding a sparse model useful for feature selection.

Complexity: both O(n p²) in training; Lasso may need coordinate descent, slower when p≫n.

**Edge cases**  
- Very high λ → all β≈0.  
- When features are highly correlated, Ridge keeps them together; Lasso arbitrarily selects one.  
- Negative or zero `alpha` is invalid (raises ValueError).  
- For large-scale data, use `sklearn.linear_model.SGDRegressor` with `penalty='l2'/'l1'`.

**Optimize & communicate**  
Explain that cross‑validation (`GridSearchCV`) tunes λ. Mention that ElasticNet blends both penalties. Conclude by summarizing the trade‑off: Ridge for bias‑variance reduction, Lasso for interpretability. This structured walk‑through showcases clear communication and depth expected at FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
