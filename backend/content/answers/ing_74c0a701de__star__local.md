---
qid: ing_74c0a701de__star__local
question: 'Explain: Storage — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 367
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:28:11-05:00'
sources: []
---

**Situation:**  
At my last company we launched a live streaming platform where each broadcast could attract up to 50k concurrent viewers. The existing comment service was using a single Redis instance for all messages; it quickly saturated memory and caused latency spikes during peak events.

**Task:**  
I was tasked with redesigning the storage layer so that comments could be persisted reliably, served in real‑time with <30 ms latency, and scaled horizontally to handle future traffic surges without compromising consistency or cost.

**Action:**  
I broke the problem into three parts: (1) **partitioning** – sharded comment streams by stream ID and time window using a consistent hash ring; (2) **storage mix** – used Redis Streams for hot, recent comments (TTL = 5 min) to support instant delivery, and appended them to an Apache Kafka topic for durability; (3) **archival** – consumed Kafka in micro‑services that batched into Parquet files on S3, enabling long‑term analytics. I also added a lightweight Bloom filter per shard to quickly reject duplicate submissions and implemented optimistic locking with Lua scripts to maintain ordering under high write contention.

**Result:**  
The new architecture cut average read latency from 120 ms to 22 ms during peak streams, increased throughput from 3 kmsg/s to 18 kmsg/s, and reduced operational costs by 35% thanks to the tiered storage model. I learned that a hybrid in‑memory + streaming pipeline can deliver both real‑time performance and long‑term reliability for high‑velocity data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
