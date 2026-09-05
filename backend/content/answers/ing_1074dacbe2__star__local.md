---
qid: ing_1074dacbe2__star__local
question: 'Explain: Message Queue — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 365
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:01:04-05:00'
sources: []
---

**Situation** – While leading a feature‑rollout team at a startup, we noticed that the photo upload pipeline stalled during peak traffic: users’ media was queued in a single Redis list, causing latency spikes and occasional data loss when the service crashed.

**Task** – I had to architect a resilient message‑queue layer that could decouple upload ingestion from downstream processing (encoding, thumbnail generation, and analytics), support millions of events per second, and guarantee at‑least‑once delivery without compromising Instagram’s 50 ms response window.

**Action** – I introduced a sharded Kafka cluster with topic partitioning keyed by user ID to preserve order. Each consumer group handled a distinct pipeline stage: the “ingest” broker wrote raw blobs to S3; an “encoder” microservice pulled messages, ran FFmpeg jobs in Docker containers, and published results to a “thumbnail” topic; finally a “analytics” consumer updated a ClickHouse columnar store for real‑time dashboards. I added idempotent offsets and dead‑letter queues, and used Prometheus alerts on lag thresholds (<5 min). For backpressure, I implemented Kafka’s `max.poll.interval.ms` tuning and auto‑scaling of consumers via Kubernetes HPA.

**Result** – Post‑deployment, upload latency dropped from 300 ms to under 45 ms during peak hours, throughput rose to 2.3 M uploads/second, and error rates fell by 92 %. I learned that sharding by key preserves ordering while scaling horizontally, and that combining Kafka’s durability with containerized workers yields both speed and resilience in a high‑traffic social platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
