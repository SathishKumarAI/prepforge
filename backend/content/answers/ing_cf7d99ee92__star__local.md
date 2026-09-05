---
qid: ing_cf7d99ee92__star__local
question: 'Explain: The Eight-Hour Onsite Project — Cursor Software Engineer Interview:
  Process, Questions, and Prep Guide (2026) | Interview Coder'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 327
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:24:08-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, the product team was stuck on fraud detection. The existing rule‑based system flagged 35% of transactions as suspicious, but only 12% were actual frauds, creating customer churn and manual review overload.

**Task**  
I was tasked with building an ML model that could reduce false positives by at least 20% while keeping the true‑positive rate above 90%, all within a two‑week sprint to meet the next quarterly rollout deadline.

**Action**  
First, I gathered labeled data from the last year’s transactions and performed feature engineering using Spark SQL, adding temporal patterns and device entropy. I split the dataset with stratified sampling (80/20) and trained a gradient‑boosted tree model in XGBoost, tuning hyperparameters via Optuna to balance precision and recall. To ensure real‑time inference, I serialized the model as ONNX and deployed it on an AWS Lambda function behind API Gateway, caching frequent queries with Redis. I also set up A/B testing pipelines in MLflow to monitor drift.

**Result**  
The new model cut false positives from 35% down to 22%, a 37% reduction, while maintaining a 92% true‑positive rate. Customer complaints dropped by 18% and manual review hours fell by 30%. I learned the importance of end‑to‑end monitoring and that small latency gains can have outsized business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
