---
qid: ing_8ade8497d2__star__local
question: 'Explain: 1.1.2.4. Setting the regularization parameter: leave-one-out Cross-Validation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 368
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:10:11-05:00'
sources: []
---

**Situation**  
In a credit‑risk project I was building an elastic‑net logistic regression model on a dataset of 12 k customers. The target class imbalance (≈7% default) meant overfitting could inflate the AUC and hurt live performance.

**Task**  
I had to choose the regularization strength λ that would generalize best while keeping the model interpretable for regulators, using leave‑one‑out cross‑validation (LOO CV) because our data was small enough for an exhaustive search yet we needed a nearly unbiased estimate of out‑of‑sample error.

**Action**  
I coded a custom LOO loop in Python with scikit‑learn’s `ElasticNetCV`, setting `cv=None` to trigger the LOO logic. For each λ candidate I fit on 11 999 rows and scored on the held‑out row, accumulating log‑loss. To speed up computation I parallelized across 8 cores and used warm starts so successive models reused coefficients from the previous λ. After evaluating ~200 λ values, I plotted cross‑validated loss versus λ to identify the elbow where additional regularization yielded diminishing returns.

**Result**  
Choosing λ at the elbow reduced overfitting: the training AUC dropped from 0.89 to 0.84 while the hold‑out AUC rose from 0.81 to 0.86, a 5 % relative improvement. The final model used only 12 predictors, satisfying regulatory transparency. I learned that LOO CV, though computationally heavier than k‑fold, can give tighter error estimates when data is limited and model complexity must be tightly controlled.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
