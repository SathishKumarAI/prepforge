---
qid: ing_f9ca72959e__faang__local
question: 'Explain: Ridge and Lasso Regression in Python - Analytics Vidhya'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 537
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:20:29-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain Ridge and Lasso regression in Python—highlighting their mathematical motivation, when each is appropriate, and how you’d implement them.

**Approach**  
1. Define ordinary least squares (OLS).  
2. Introduce regularization terms: L2 for Ridge, L1 for Lasso.  
3. Mention the objective functions and hyperparameter λ.  
4. Show usage of `sklearn.linear_model` with cross‑validation.  

**Depth**  
- **Ridge** minimizes  
  \[
  \min_\beta \|y-X\beta\|^2_2 + \lambda\|\beta\|^2_2
  \]
  → shrinks coefficients toward zero, keeps all predictors (useful when multicollinearity).  
- **Lasso** minimizes  
  \[
  \min_\beta \|y-X\beta\|^2_2 + \lambda\|\beta\|_1
  \]
  → can set coefficients exactly to zero, performing feature selection.  
Python snippet:  

```python
from sklearn.linear_model import RidgeCV, LassoCV

ridge = RidgeCV(alphas=np.logspace(-4, 4, 50), cv=5).fit(X, y)
lasso = LassoCV(alphas=np.logspace(-6, 0, 100), max_iter=5000, cv=5).fit(X, y)

print(ridge.coef_, lasso.coef_)
```

Complexity: both are O(n·p²) for fitting (n samples, p features); Lasso can be slower due to coordinate descent but sparse solutions reduce memory.

**Edge Cases**  
- If λ→0, both revert to OLS.  
- Very high λ forces all β≈0 (underfitting).  
- Lasso struggles when predictors are highly correlated; Ridge may perform better.  

**Optimize & Communicate**  
Explain that you’d tune λ via nested CV, evaluate MAE/RMSE, and inspect `coef_` sparsity for Lasso. Mention that ElasticNet blends both penalties if you need a compromise. Conclude by noting that choosing between them depends on whether feature selection (Lasso) or multicollinearity mitigation (Ridge) is the priority.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
