---
qid: ing_74bb48edb6__faang__local
question: Why Kafka for Ingestion? — Real Time Search
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 432
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:16:04-05:00'
sources: []
---

**Why Kafka for real‑time search ingestion?**

| Step | What I’d say |
|------|--------------|
| **Clarify** | *Goal:* ingest user queries/updates at millions of ops/sec, buffer them for downstream indexing, keep order per key, and guarantee durability. <br>Assumptions: high write volume, low latency, need replayability, multi‑tenant workloads. |
| **Approach** | 1) Use Kafka as a durable, partitioned log.<br>2) Producers stream raw events (search queries, clicks).<br>3) Consumers (e.g., Flink/Storm) read partitions in order, update search indexes or materialized views. |
| **Depth** | • **Throughput:** 10⁵–10⁶ msgs/sec with compression and batching.<br>• **Ordering:** Partition by userID/query hash → preserves per‑user sequence for relevance ranking.<br>• **Durability:** Replication factor ≥3 ensures no data loss; configurable retention (e.g., 7 days).<br>• **Scalability:** Add partitions to scale horizontally; consumers auto‑balance. |
| **Edge Cases** | • Backpressure: if consumer lags, Kafka’s high watermark stops producers – avoid overload.<br>• Skewed keys: hot partitions can bottleneck; mitigate with key hashing or custom partitioner.<br>• Retention limits: ensure TTL covers index lag time. |
| **Optimize & Communicate** | • Tune batch size (1 MB) and linger.ms (5 ms) for sub‑10 ms latency.<br>• Enable `compression.type=gzip` to reduce network load.<br>Explain trade‑offs: higher replication → lower availability, lower compression → higher throughput. <br>Conclude that Kafka’s log semantics, horizontal scalability, and strong consistency make it the backbone for ingesting data into a real‑time search pipeline. |

*Word count: ~190.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
