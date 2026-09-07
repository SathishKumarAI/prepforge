---
qid: ing_36a2c6026f__faang__local
question: 'Explain: 1.1.3.2.1. Using cross-validation — 1.1. Linear Models \u2014
  scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 605
total_tokens: 867
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:50:58-05:00'
sources: []
---

**Clarify**  
You’re asking how *cross‑validation* is used with **linear models** in the Scikit‑Learn 1.9.0 docs (section 1.1.3.2.1). I’ll assume you want a concise, interview‑style explanation of what cross‑validation does here, how it’s invoked, and why it matters for linear estimators.

**Approach**  
1. Summarize the purpose of CV in model selection/estimation.  
2. Explain the Scikit‑Learn API: `cross_val_score`, `GridSearchCV`, `Pipeline`.  
3. Highlight linear models (e.g., LinearRegression, Ridge, Lasso).  
4. Mention performance metrics and scoring.  

**Depth**  
- **Goal:** estimate generalization error by partitioning data into *k* folds; each fold is used once as a test set while the remaining *k–1* folds train the model.  
- **API usage:**
  ```python
  from sklearn.model_selection import cross_val_score, GridSearchCV
  from sklearn.linear_model import Ridge

  X, y = load_data()
  ridge = Ridge()

  # Simple CV
  scores = cross_val_score(ridge, X, y, cv=5, scoring='neg_mean_squared_error')

  # Hyper‑parameter tuning with CV
  param_grid = {'alpha': [0.1, 1, 10]}
  grid = GridSearchCV(Ridge(), param_grid, cv=5)
  grid.fit(X, y)
  best_model = grid.best_estimator_
  ```
- **Complexity:** training *k* times; for linear models this is \(O(k \cdot n^2 p)\) (where *n* samples, *p* features), but efficient solvers reduce it.  
- **Trade‑offs:** higher *k* → lower bias but higher variance and cost; `StratifiedKFold` preserves class distribution for classification.

**Edge Cases**  
- Small datasets: use Leave‑One‑Out or repeated CV to avoid high variance.  
- Imbalanced data: ensure stratification; otherwise performance estimates are biased.  
- Time‑series: use `TimeSeriesSplit` instead of random folds to respect temporal order.

**Optimize & Communicate**  
- Use pipelines to prevent data leakage (scaling inside CV).  
- Parallelize with `n_jobs=-1`.  
- Report both training and validation scores for sanity checks.  

In summary, cross‑validation in Scikit‑Learn’s linear models is a systematic way to gauge model robustness, tune hyper‑parameters, and avoid overfitting—all by repeatedly fitting the estimator on different data splits through the convenient `cross_val_score` or `GridSearchCV` utilities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
