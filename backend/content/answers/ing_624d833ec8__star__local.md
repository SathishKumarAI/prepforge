---
qid: ing_624d833ec8__star__local
question: 'Explain: Similarly you could be potentially building a'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 337
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:44:42-05:00'
sources: []
---

**Situation:** At my last role I was tasked with improving the churn prediction for our SaaS product. The existing logistic regression model only hit an 0.68 AUC and our marketing team was skeptical of any further investment.

**Task:** My goal was to build a more accurate, production‑ready model that could be deployed within two weeks, while keeping latency under 50 ms per inference.

**Action:** I scoped the problem by gathering clickstream, usage, and support ticket data from Snowflake. After feature engineering with Featuretools, I compared three algorithms: XGBoost, CatBoost, and a simple feed‑forward neural net in PyTorch. I used Optuna for hyperparameter tuning and evaluated each via cross‑validated ROC‑AUC. To meet latency constraints, I distilled the best CatBoost model into a 10‑layer lightweight TensorFlow Lite model and wrapped it with FastAPI for inference.

**Result:** The distilled model achieved a 0.78 AUC, a 15 % lift over baseline, and processed predictions in 30 ms on our edge servers. We deployed it to production, resulting in a 4 % drop in churn within three months. I learned that combining automated feature engineering with model distillation can deliver both accuracy and speed without heavy infrastructure changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
