---
qid: ing_2f39c54d15__star__local
question: 'Explain: Subscription — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 384
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:03:07-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a real‑time analytics pipeline for a SaaS platform that handled over 10 million events per day from IoT devices. The existing batch processing was too slow for alerting and dashboards, so the product owner demanded a low‑latency publish/subscribe layer.

**Task** – Design a scalable, fault‑tolerant Pub/Sub system that could ingest 200k messages/sec, deliver them to multiple consumer services (alert engine, metrics collector, audit log) with at least 99.9% availability and sub‑500 ms latency.

**Action** – I chose Apache Kafka as the broker because of its proven durability and partitioning model. I defined a topic per event type, used key‑based partitioning to preserve order for each device, and set replication factor 3 across three data centers. For consumers, I implemented a consumer group for the alert engine and a separate group for metrics aggregation, using offset commits in Zookeeper to guarantee at‑least‑once delivery. To handle burst traffic I added an autoscaling Kafka Connect cluster that buffers incoming HTTP POSTs into the topic via a lightweight REST proxy. I also built a monitoring dashboard with Prometheus/Kafka JMX exporters to track lag and throughput.

**Result** – The new Pub/Sub layer reduced alert latency from 5 seconds to under 200 ms, increased data freshness for dashboards by 80%, and supported a 4× traffic spike during peak hours without any outages. I learned that choosing the right partitioning strategy and careful consumer group design are key to balancing throughput, ordering guarantees, and resilience in high‑scale event systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
