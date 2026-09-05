---
qid: ing_9681a76a23__star__local
question: 'Explain: Uh it it only hits a certain — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 355
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:33:53-05:00'
sources: []
---

**Situation** – When I joined the Video Recommendation team at a large streaming platform, our click‑through rate (CTR) metric had plateaued around 4.5 %. The engineering squad was tasked with increasing it by at least 1 % before the next quarterly review.

**Task** – My responsibility was to build a scalable recommendation pipeline that could ingest billions of user interactions per day, train a fresh model every night, and deploy predictions in real time without exceeding our latency budget of 50 ms per request.

**Action** – I started by profiling the existing Spark batch job; it spent 70 % of its time shuffling data. I rewrote the feature extraction as a streaming micro‑service using Apache Flink and Kafka, enabling incremental updates. For modeling, I switched from a monolithic logistic regression to a distributed LightGBM ensemble trained on a pre‑aggregated feature table in BigQuery, which cut training time from 12 hrs to 2 hrs. To meet latency constraints, I served the model via TensorRT‑optimized inference containers behind an edge cache, reducing per‑user query time to 30 ms.

**Result** – Within two months we lifted CTR by 1.3 % and reduced feature‑engineering cycle time from 12 hrs to under 3 hrs. The new pipeline also cut infrastructure costs by ~20 %. I learned that micro‑service decomposition combined with incremental data processing can dramatically improve both scalability and responsiveness in ML production systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
