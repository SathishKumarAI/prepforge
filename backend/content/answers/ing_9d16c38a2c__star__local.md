---
qid: ing_9d16c38a2c__star__local
question: 'Explain: have a subscriber service that is called'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 322
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:46:13-05:00'
sources: []
---

**Situation:** In my last role I was leading the revamp of our subscription billing microservice, which handled over 1 M active users daily and had a 3 % churn rate that was steadily rising.

**Task:** My goal was to reduce churn by predicting at-risk subscribers in real time and trigger proactive retention offers without adding latency or breaking the existing API contract.

**Action:** I designed a lightweight gradient‑boosting model (XGBoost) trained on user activity, payment history, and support tickets. The model ran inside a Docker container behind the same HTTP endpoint as the billing service. To keep inference under 5 ms, I used ONNX runtime and served predictions via an in‑memory cache keyed by user ID. When a subscriber made a call to “get subscription status”, the wrapper first queried the cache; if missing, it fetched user features from Redis, ran the model, and returned the risk score along with the normal response.

**Result:** After deployment, we saw churn drop 18 % in three months, saving roughly $2.3M annually. I learned that coupling ML inference tightly to an existing service can be done with minimal latency if you cache features and use efficient runtimes—an approach I now apply to any real‑time recommendation pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
