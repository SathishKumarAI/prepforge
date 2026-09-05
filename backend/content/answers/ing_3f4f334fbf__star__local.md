---
qid: ing_3f4f334fbf__star__local
question: 'Explain: Distributed Counter Data Schema Design — Distributed Counter System
  Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 393
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:34:47-05:00'
sources: []
---

**Situation**  
I was leading the architecture team at a SaaS startup that needed to expose real‑time page view counts on millions of product pages. Our monolithic backend could not handle 10 k writes per second and the latency spikes were killing user engagement.

**Task**  
Design a distributed counter system that supports high write throughput, linear scalability, eventual consistency for read queries, and minimal operational overhead.

**Action**  
I chose a hybrid approach: a write‑through cache in Redis Cluster for low‑latency increments, backed by an asynchronous persistence layer using Apache Kafka to stream events into Cassandra. Each page had a sharded key (`page:{id}:ctr`) in Redis; writes were pipelined and batched every 100 ms to reduce network chatter. A microservice consumed the Kafka topic, aggregated counts per shard, and performed upserts into Cassandra for durable storage. To avoid hot‑spotting we used consistent hashing on page IDs, and we implemented a TTL on Redis keys so stale data didn’t accumulate. Monitoring with Prometheus and Grafana surfaced latency outliers; we auto‑scaled Redis nodes based on write rate thresholds.

**Result**  
The system handled 25 k writes/s with <15 ms average latency for increments and <200 ms for read queries. Consistency lag stayed under 1 s, keeping analytics dashboards fresh. We reduced infrastructure costs by 30% compared to a single‑node MySQL solution, and the design proved resilient—no single point of failure during a 48 h load spike test. I learned that coupling an in‑memory cache with an event‑driven persistence layer balances speed and durability when scaling counters at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
