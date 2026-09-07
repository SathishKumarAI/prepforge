---
qid: ing_84c9ca61c5__aws__local
question: 'Explain: KafkaConsumer (kafka 2.2.0 API)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 478
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:25:18-05:00'
sources: []
---

**Situation & Task**  
In my last role I built a real‑time fraud detection pipeline for a payments platform that ingested ~50 M events per day from Kafka. The requirement was to consume those events with minimal latency, guarantee at‑least‑once delivery, and feed them into an ML model in SageMaker. I chose the Kafka 2.2.0 `KafkaConsumer` API.

**Action – Design & Implementation**  
* **Consumer group & partitions** – I created a consumer group with 12 instances, each subscribed to a subset of 48 partitions (≈1 M events/second per instance). This ensured horizontal scaling and load balancing.  
* **Poll loop & batching** – The consumer polls every 100 ms, fetching up to 10 k records. I used `max.poll.records` = 10 000 and processed them in a thread‑pool, then called `commitSync()` only after successful ML inference, satisfying at‑least‑once semantics.  
* **Offset management** – Offsets were stored in Kafka’s internal topic (`__consumer_offsets`) to avoid external DBs; I enabled `enable.auto.commit=false` for full control.  
* **Back‑pressure & retries** – On inference failures (e.g., SageMaker endpoint throttling) the consumer re‑queued messages with exponential back‑off, preventing message loss and maintaining throughput.  

**Result**  
The pipeline processed 50 M events/day with an end‑to‑end latency of <200 ms. We saw a 12% reduction in false positives compared to the legacy batch model, translating to ~$3 M annual savings. The consumer’s CPU usage stayed below 60%, and we avoided additional cost by using only Kafka and SQS for retries.

**Leadership Principles Highlighted**  
* **Ownership** – I designed the entire ingestion‑to‑ML flow, from partitioning strategy to failure handling.  
* **Dive Deep** – Tuned poll settings, offset commits, and back‑off logic based on real metrics.  

Bar‑raisers look for clear ownership, depth in design decisions, quantified impact, and lessons learned (e.g., we initially used auto‑commit and had duplicate processing; switching to manual commits fixed that).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
