---
qid: ing_f227097211__star__local
question: 'Explain: Consumer — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 366
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:32:31-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a real‑time recommendation engine for an e‑commerce platform that had to process over 10 k events per second from user interactions (clicks, views, purchases). The existing batch pipeline caused a lag of 15 minutes, which meant recommendations were stale.

**Task** – Design a consumer architecture that ingests the event stream, processes it with low latency, and updates recommendation models in near real‑time while guaranteeing at‑least‑once delivery and graceful degradation under peak load.

**Action** – I chose Apache Kafka as the backbone for decoupling producers (frontend services) from consumers (processing workers). I created a “user‑activity” topic with 12 partitions to parallelize consumption. Each consumer group ran multiple stateless Spark Structured Streaming jobs that performed feature extraction and updated an in‑memory ML model stored in Redis. To handle backpressure, I implemented a dead‑letter queue for malformed messages and used Kafka’s offset commit strategy so consumers could resume from the last processed record after failures. Additionally, I set up Prometheus alerts on lag metrics and auto‑scaled consumer pods via Kubernetes HPA.

**Result** – The new pipeline reduced recommendation latency from 15 minutes to under 2 seconds, increased click‑through rate by 18%, and handled peak traffic spikes of 30 k events/s without data loss. I learned the importance of partitioning strategy for throughput, the trade‑off between at‑least‑once vs exactly‑once semantics, and how observability is key to maintaining a resilient streaming system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
