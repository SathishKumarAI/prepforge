---
qid: ing_0e1b712ca9__star__local
question: 'Explain: Stateful Architecture — Stateful vs. Stateless Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 375
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:56:49-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we built an anomaly‑detection pipeline for credit card transactions. The incoming stream was 200 k events per minute and the model needed to remember each user’s recent spending pattern to flag suspicious behavior.

**Task:**  
I had to design the architecture so that the inference service could maintain per‑user state without compromising throughput or latency, while still being able to scale horizontally during peak traffic.

**Action:**  
I chose a stateful microservice approach using Redis Streams for durable state storage and Kafka for event ingestion. Each transaction message was routed to a stateless “extract‑transform” worker that pushed the raw data into Kafka; a separate stateful consumer read from the stream, updated the user’s rolling window in Redis (TTL 24 h), and fed the enriched payload into our TensorFlow model hosted on a GPU cluster. To keep latency under 50 ms, I implemented caching of the latest state per shard in memory and used optimistic locking to avoid race conditions. We also added a fallback stateless path that re‑computed state from Redis if a node failed.

**Result:**  
The system processed all 200 k events with an average end‑to‑end latency of 38 ms, achieving a 99.8% uptime during a 48‑hour peak test. The true‑positive rate for fraud detection rose by 12%, and we reduced the false‑positive churn from 4.5% to 2.7%. I learned that coupling stateful caching with a distributed stream platform can deliver both scalability and consistency in real‑time ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
