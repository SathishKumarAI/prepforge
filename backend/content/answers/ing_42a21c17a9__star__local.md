---
qid: ing_42a21c17a9__star__local
question: 'Explain: Airbnb — Faang Coding Interview Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 343
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:41:56-05:00'
sources: []
---

**Situation**  
When I joined Airbnb’s data science team, the search ranking algorithm was pulling in 18 % fewer bookings than projected during peak travel season. The product managers asked us to build a machine‑learning model that could surface listings more relevant to each user and boost conversion.

**Task**  
I had to design an end‑to‑end pipeline that ingested real‑time search logs, engineered features at scale, trained a ranking model, and deployed it with low latency so the front‑end could render results within 200 ms.

**Action**  
First, I extracted clickstream data from Kafka into Spark, then used feature stores in Feast to cache user‑profile and listing embeddings. For modeling, I implemented a Lambda architecture: an offline batch XGBoost model trained nightly on historical interactions, and an online LightGBM service that updated every hour with fresh clicks. I employed counterfactual evaluation to estimate lift before rollout. The model was containerized in Docker and deployed via Kubernetes, with A/B testing through Optimizely.

**Result**  
Within two weeks of launch, the new ranking increased click‑through rate by 12 % and booking conversion by 9 %, translating to an estimated $4.2 M incremental revenue per quarter. I learned how to blend batch and streaming ML at scale while keeping latency under strict SLAs, a skill that’s now core to any high‑traffic recommendation system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
