---
qid: ing_3d7b664e78__star__local
question: 'Explain: of event sourcing there''s two events going'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 393
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:31:02-05:00'
sources: []
---

**Situation:** While leading the data pipeline for a SaaS analytics platform, we discovered that our recommendation engine was drifting because it only saw aggregated daily summaries instead of real‑time user interactions.  

**Task:** I had to redesign the ingestion layer so the system could capture every click and purchase as separate events, then feed them into the model training pipeline without breaking existing downstream services.  

**Action:** I introduced a dual‑stream architecture using Kafka: one topic for “UserClick” events and another for “Purchase” events. Each event carried a UUID, timestamp, user ID, item metadata, and a version field to support eventual consistency. I updated the domain model in our microservice to emit these events via Spring Cloud Stream, added schema registry enforcement, and wrote idempotent consumer logic that reconciles duplicates across streams. The training job was re‑wired to consume from both topics, aggregating them into feature vectors on the fly with Apache Flink.  

**Result:** We cut model retraining latency from 24 hours to under 5 minutes, increased click‑through rate by 12%, and reduced storage costs by 18% thanks to event deduplication. I learned how to balance real‑time ingestion with batch consistency while keeping the system resilient to out‑of‑order events.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
