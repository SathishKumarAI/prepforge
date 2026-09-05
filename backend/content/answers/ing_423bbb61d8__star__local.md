---
qid: ing_423bbb61d8__star__local
question: 'Explain: Interview Follow-Up Questions — Recommendation Engine'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 289
total_tokens: 523
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:41:11-05:00'
sources: []
---

**Situation** – In my last role at a mid‑size e‑commerce platform, we had an aging recommendation system that served only static category tags. User engagement on product pages was flat at ~12% click‑through, and churn for new users spiked after the first week.

**Task** – I was tasked to redesign the engine to boost CTR by 25% within three months while keeping latency under 200 ms per request.

**Action** – First, I built a data pipeline in Spark that ingested session logs, click‑throughs, and purchase histories into a feature store (Delta Lake). Using LightFM, I trained a hybrid matrix‑factorization model combining collaborative filtering with content embeddings from product descriptions. I wrapped the model in a FastAPI microservice, deployed it on Kubernetes, and added an A/B testing framework with Optuna to fine‑tune hyperparameters in real time. To keep latency low, I cached top‑10 recommendations per user in Redis.

**Result** – After rollout, CTR rose to 15.8% (a 31% lift), new‑user churn fell by 18%, and API latency stayed at ~140 ms. I learned that continuous feature monitoring and rapid experimentation are key to sustaining recommendation quality in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
