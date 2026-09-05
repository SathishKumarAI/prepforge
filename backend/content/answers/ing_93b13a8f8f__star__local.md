---
qid: ing_93b13a8f8f__star__local
question: 'Explain: Use cases: — Delivery Semantics'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 308
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:28:13-05:00'
sources: []
---

**Situation:**  
At my previous company we built a real‑time recommendation engine that ingested click events from our mobile app via Kafka, processed them through an online inference pipeline, and pushed personalized ad slots back to the front‑end within 200 ms. The product team flagged a spike in duplicate ads being shown during peak traffic.

**Task:**  
I had to diagnose whether the issue stemmed from delivery semantics—specifically at‑least‑once vs exactly‑once message processing—and implement a fix that preserved latency while eliminating duplicates.

**Action:**  
I reconfigured our Kafka consumer group to enable idempotent producers and set `enable.idempotence=true`. Then I switched the inference service to use Spark Structured Streaming’s “exactly‑once” output mode, writing predictions to a Kinesis stream with per‑record sequence numbers. On the front‑end side, I added a small in‑memory cache keyed by event ID so repeated messages would be id’d and discarded before rendering.

**Result:**  
Duplicate ad displays dropped from 12% of impressions during peak hours to under 0.5%, while overall latency stayed at ~180 ms. The exercise reinforced that proper delivery semantics can dramatically improve user experience without sacrificing performance, and I now routinely audit message pipelines for idempotence before scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
