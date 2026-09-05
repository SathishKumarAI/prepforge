---
qid: ing_c013b8604f__star__local
question: 'Explain: When to Use Message Queues — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 345
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:54:40-05:00'
sources: []
---

**Situation** – In my last role I was building a real‑time recommendation engine for an e‑commerce platform that processed millions of user interactions per day. The model training pipeline had to ingest click logs, compute feature vectors, and retrain the ranking model every 6 hours while still serving live predictions with sub‑100 ms latency.

**Task** – I needed to decouple data ingestion from downstream services (feature store, training job, and inference API) so that spikes in traffic or a failed training run wouldn’t bring down the entire system. The solution had to guarantee at least once delivery and preserve order for user sessions.

**Action** – I introduced Kafka as a message queue between the event producer and the consumer micro‑services. Producers wrote raw click events to a “clickstream” topic; consumers subscribed to partitions, processed batches into feature vectors, and pushed them to a Redis cache used by the inference API. A separate consumer group handled nightly training jobs, pulling data from Kafka’s log with exactly‑once semantics via idempotent writes to an S3 bucket. I also set up dead‑letter queues for malformed records and monitored lag metrics to auto‑scale consumers.

**Result** – The system achieved 99.9 % availability during traffic surges, reduced training latency by 35 %, and cut the overall data pipeline cost by 20 % through better resource utilization. I learned that message queues are indispensable when you need scalability, fault isolation, and reliable event ordering in ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
