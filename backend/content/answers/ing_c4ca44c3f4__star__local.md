---
qid: ing_c4ca44c3f4__star__local
question: 'Explain: Publish/Subscribe — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 357
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:03:35-05:00'
sources: []
---

**Situation**  
At my last role I led a project to scale our real‑time recommendation engine for a streaming platform that served 12 M concurrent users. The existing monolithic pipeline couldn’t handle the spike in user events during peak hours, causing 7 % latency drift.

**Task**  
I needed to decouple event ingestion from model inference so we could process millions of clicks per second without bottlenecks, while guaranteeing at‑least‑once delivery and minimal lag for the recommendation service.

**Action**  
We built a Kafka‑based publish/subscribe architecture. User actions (clicks, plays) were published to topic “user_events” by the front‑end web servers. A consumer group of 8 stateless workers pulled events in batches, performed feature extraction, and pushed them to a second topic “model_inputs”. The inference microservice subscribed to this topic, queried an online TF‑Serving endpoint, and wrote enriched predictions back to “predictions”. We used schema registry for Avro schemas, enabled idempotent writes, and set consumer lag metrics in Prometheus. Auto‑scaling on Kafka partitions and worker pods ensured we stayed below 100 ms latency under peak load.

**Result**  
Latency dropped from 350 ms to 80 ms (72 % improvement), throughput increased from 50k to 300k events/sec, and the recommendation hit rate rose by 4.3 %. I learned that a well‑designed pub/sub pipeline not only solves scaling but also provides observability and resilience for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
