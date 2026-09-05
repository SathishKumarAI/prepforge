---
qid: ing_a82557e20f__star__local
question: 'Explain: Lambda Architecture — Distributed Counter System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 406
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:09:21-05:00'
sources: []
---

**Situation** – In my previous role at a fintech startup we had to expose real‑time account balances to traders while also keeping audit logs for compliance. The data pipeline was ingesting millions of transaction events per day and our existing batch system could not provide sub‑second balance updates, which caused significant trading delays.

**Task** – Design a distributed counter system that would deliver near‑real‑time balances (≤ 200 ms latency) while preserving the accuracy guarantees of an offline batch view for regulatory reporting. The solution had to scale horizontally and tolerate node failures without data loss.

**Action** – I proposed a Lambda architecture:  
1. **Speed layer** – Kafka streams processed events in real time, updating a Redis sorted set per account (incrementing counters). We used Lua scripts for atomic increments and stored snapshots every 5 s to a RocksDB instance on each node.  
2. **Batch layer** – Daily Spark jobs read the raw event log from HDFS, aggregated balances into Parquet files partitioned by account ID, and materialized a Hive table for audit queries.  
3. **Serving layer** – A lightweight REST API queried Redis for live data; if a key was missing it fell back to the batch view via Presto over the Parquet tables. I implemented health checks and auto‑recovery scripts to rebalance partitions when nodes failed.

**Result** – The real‑time balance latency dropped from 1.2 s to 180 ms, and the system handled a 3× spike in traffic during market openings without downtime. Batch accuracy was verified against the speed layer with <0.01% divergence. I learned that combining stream‑processing primitives (Kafka + Redis) with batch analytics (Spark + Parquet) can meet stringent latency and compliance requirements simultaneously.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
