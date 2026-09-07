---
qid: ing_511e05f71e__faang__local
question: 'Explain: 1.1. Linear Models — 1.1. Linear Models \u2014 scikit-learn 1.9.0
  documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 502
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:53:07-05:00'
sources: []
---

**Clarify**  
You want a concise explanation of linear models in *scikit‑learn* (v1.9.0). I’ll assume the audience knows basic ML concepts but may not be familiar with scikit‑learn’s API. I’ll cover what a “linear model” is, how it’s implemented in the library, and key hyper‑parameters.

**Approach**  
1. Define linear models (ridge, lasso, logistic, etc.).  
2. Show the core classes (`LinearRegression`, `LogisticRegression`, `SGDRegressor`, `SGDClassifier`).  
3. Highlight shared attributes/methods (`fit`, `predict`, `score`).  
4. Mention regularization and solver choices.

**Depth**  
- **Mathematics:** Predictors are linear combinations of features: \(\hat y = Xw + b\).  
- **scikit‑learn API:**  
  ```python
  from sklearn.linear_model import LinearRegression, LogisticRegression
  lr = LinearRegression(fit_intercept=True)
  lr.fit(X_train, y_train)
  preds = lr.predict(X_test)
  ```
  Regularized variants (`Ridge`, `Lasso`) add \( \lambda\|w\|_1\) or \( \lambda\|w\|_2^2\).  
- **Solvers:** Closed‑form (normal equation), gradient descent, coordinate descent. Hyper‑parameter `solver` selects the algorithm; `max_iter`, `tol` control convergence.  
- **Complexity:** Training is \(O(n\,p)\) for closed‑form, higher for iterative solvers; prediction is linear in features.

**Edge Cases**  
- Singular matrices → add regularization or use `sag/saga`.  
- Very high dimensional sparse data → prefer `SGDRegressor` with `alpha`.  
- Multicollinearity → ridge reduces variance but doesn’t perform feature selection.

**Optimize & Communicate**  
Explain that choosing the right solver and regularizer balances bias‑variance trade‑off. When interviewing, I’d illustrate by comparing RMSE on a toy dataset while toggling `alpha` or switching from `ols` to `ridge`. This shows both technical depth and pragmatic reasoning—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
