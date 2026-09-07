---
qid: ing_8ab3736028__faang__local
question: 'Explain: Details to know — Supervised Machine Learning: Regression and
  Classification  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 510
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:06:20-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise overview of supervised learning with emphasis on the two main tasks: *regression* (continuous targets) and *classification* (discrete labels). I’ll assume you want the core concepts, common algorithms, evaluation metrics, and typical pitfalls that interviewers probe.

**Approach**  
1. Define supervised ML and its objective.  
2. Distinguish regression vs classification with examples.  
3. List representative models for each, noting assumptions.  
4. Highlight key metrics and how they guide model selection.  
5. Touch on over‑fitting/under‑fitting trade‑offs.

**Depth**  

| Task | Typical Algorithms | Key Assumptions / Strengths | Common Metrics |
|------|--------------------|-----------------------------|----------------|
| **Regression** | Linear regression, Ridge/Lasso, Decision trees, Random Forests, Gradient Boosting (XGBoost), Neural nets | Linearity or piecewise smoothness; tree‑based models handle interactions | MAE, MSE, RMSE, R² |
| **Classification** | Logistic regression, SVM, kNN, Naïve Bayes, Decision trees, Random Forests, Gradient Boosting, Deep nets | Binary/multiclass separability; independence for NB | Accuracy, Precision/Recall, F1, ROC‑AUC, Log‑loss |

*Model selection*: Use cross‑validation to estimate generalization. Regularization (L1/L2) combats over‑fitting. For skewed classes, balance with resampling or class weights.

**Edge Cases**  
- **High dimensionality & multicollinearity** → regularized regressors.  
- **Imbalanced data** → precision/recall trade‑offs; use stratified CV.  
- **Non‑stationary targets** → online learning or retraining schedules.

**Optimize & Communicate**  
I’d iterate: start with a simple baseline (e.g., linear regression for continuous, logistic for binary), evaluate, then add complexity only if validation error justifies it. I’d explain that the choice of metric aligns with business goals—e.g., RMSE for pricing vs AUC for fraud detection. Finally, I’d emphasize interpretability: tree‑based models + SHAP values can satisfy both performance and explainability demands in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
