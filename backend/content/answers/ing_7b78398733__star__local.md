---
qid: ing_7b78398733__star__local
question: 'Explain: How Message Queues Work — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 313
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:40:58-05:00'
sources: []
---

**Situation** – At my last role, we were building a real‑time recommendation engine that ingested clickstream data from millions of users. The ingestion pipeline was lagging; latency spiked during traffic surges and our model training jobs stalled.

**Task** – I had to design a scalable, fault‑tolerant way to decouple the data producer (click events) from the consumer (feature extraction & model updates), ensuring no data loss and predictable throughput.

**Action** – I chose Kafka as the backbone. I set up multiple partitions per topic so that producers could write in parallel, and consumers could run as a scalable group. Each message carried a unique event ID, timestamp, and payload schema version, enabling idempotent processing. I implemented a dead‑letter queue for malformed messages, and used consumer offsets stored in Kafka to guarantee at‑least‑once delivery. For back‑pressure, I tuned the producer’s batch size and linger time so that bursts were smoothed into steady streams. Finally, I added Prometheus metrics on message lag and throughput to monitor real‑time health.

**Result** – The system handled 5 × traffic peaks with <200 ms latency, reduced training downtime by 70%, and our model accuracy improved by 3% due to more consistent data flow. I learned that the right queue design turns a chaotic stream into reliable, measurable throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
