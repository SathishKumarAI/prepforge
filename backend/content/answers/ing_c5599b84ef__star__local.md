---
qid: ing_c5599b84ef__star__local
question: 'Explain: Week 3 - Non-linear data structures ​ — Best practice questions
  by the author of Blind 75 | Tech Interview Handbook'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 326
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:04:26-05:00'
sources: []
---

**Situation**  
In a recent project at my previous company we were tasked with predicting customer churn for a telecom provider. The initial logistic regression model only achieved 68 % accuracy because the relationship between usage patterns and churn was highly non‑linear.

**Task**  
I needed to build a model that could capture complex interactions without overfitting, while keeping inference time under two seconds per prediction for real‑time dashboards.

**Action**  
First I plotted pairwise feature relationships; they revealed clear clusters and curved decision boundaries. I chose a gradient‑boosted tree (XGBoost) because it handles non‑linearities naturally and is efficient at inference. I tuned depth to 6, learning rate to 0.1, and used early stopping on a validation set. To avoid overfitting I applied L2 regularization and limited the number of leaves per tree. I also engineered interaction features (e.g., total minutes × data usage) that the trees could exploit directly.

**Result**  
The final model lifted accuracy to 84 % and AUC to 0.91, a 16‑point improvement over logistic regression. Deployment latency remained <1 ms per call, meeting our real‑time requirement. I learned that for non‑linear data structures, tree‑based ensembles often provide the best trade‑off between performance and speed when properly regularized.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
