---
qid: ing_8955659ab2__star__local
question: What Is a Distributed Counter? — Distributed Counter System Design - System
  Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 339
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:07:37-05:00'
sources: []
---

**Situation** – At my last company we had an internal analytics platform that needed to track the number of active users per region in real time. The traffic spiked during product launches, and our single‑node counter exploded into a bottleneck: latency shot up to 300 ms and the database rolled back transactions because it couldn’t keep up.

**Task** – I was tasked with designing a highly available distributed counter that could handle millions of updates per second while guaranteeing eventual consistency across all data centers.

**Action** – I chose a hybrid approach: use **Redis Cluster** for fast in‑memory increments and a **log‑structured merge tree (LSM)** table in Cassandra to persist the totals. Each node ran an increment service that performed `INCRBY` locally, then pushed delta batches to a Kafka topic every 100 ms. A consumer replayed those deltas into Cassandra, applying them via lightweight transactions to avoid write contention. To keep counts accurate during network partitions I implemented a **vector clock** per region so replicas could merge without losing updates.

**Result** – The new system handled 2 million writes per second with an average latency of 15 ms. Redundancy reduced data loss risk to <0.01%. We also cut operational costs by 30% because we no longer needed a heavyweight relational DB for counters. I learned that combining fast in‑memory ops with durable, eventually consistent storage gives the best trade‑off between performance and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
