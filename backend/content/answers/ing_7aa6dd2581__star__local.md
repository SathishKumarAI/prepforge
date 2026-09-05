---
qid: ing_7aa6dd2581__star__local
question: 'Explain: 1.1.6. Multi-task Elastic-Net — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 419
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:39:19-05:00'
sources: []
---

**Situation:**  
At a fintech startup I was building a credit‑risk model that had to predict both the probability of default and the expected loss severity for each loan applicant. The data were high‑dimensional (≈12 000 features) and highly correlated, so separate models overfit quickly.

**Task:**  
I needed a single linear framework that could learn both targets simultaneously while enforcing sparsity across features and encouraging similar coefficient patterns between tasks.

**Action:**  
I used scikit‑learn’s `MultiTaskElasticNet`. I set `alpha=0.1` to control overall regularization strength, tuned `l1_ratio=0.7` via `GridSearchCV`, and enabled `max_iter=5000` for convergence on the sparse CSR matrix. After fitting, I inspected the coefficient matrix: 45 features were non‑zero across both tasks, with 30 overlapping, confirming the model was capturing shared structure. I also plotted the training vs validation loss to verify that the elastic‑net penalty reduced variance compared to plain `LinearRegression`.

**Result:**  
The multitask model raised joint R² from 0.62 (separate models) to 0.68 and cut mean absolute error on severity by 12 %. It also trimmed the feature set by ~60 %, simplifying downstream interpretation. I learned that elastic‑net’s blend of L1/L2 regularization is powerful for high‑dimensional, correlated multi‑output problems—especially when you want both sparsity and shared signal across tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
