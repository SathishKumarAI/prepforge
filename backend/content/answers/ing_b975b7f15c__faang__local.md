---
qid: ing_b975b7f15c__faang__local
question: 'Explain: Popular across InfoQ — Discord Migrates Trillions of Messages
  from Cassandra to ScyllaDB - InfoQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 493
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:54:29-05:00'
sources: []
---

**Clarify**  
Discord wants to move a massive, write‑heavy chat history (≈ trillions of messages) from **Cassandra** to **ScyllaDB**. The goal is low latency, high throughput, and cost efficiency while keeping data intact. Key assumptions:  
- Data model in Cassandra is wide‑row with per‑user/message partitions.  
- Write amplification and storage overhead in Cassandra are problematic at this scale.  
- ScyllaDB offers similar CQL API but better performance on modern hardware.

**Approach**  
1. **Schema & partition alignment** – keep the same keyspace/table definitions so existing code continues to work.  
2. **Data export‑import pipeline** – stream rows from Cassandra using `nodetool snapshot` or CDC, then bulk‑load into Scylla via `sstableloader`.  
3. **Parallelism** – shard by user ID; each worker reads a slice and writes concurrently.  
4. **Consistency & validation** – use checksums per partition before/after to catch corruption.  
5. **Cutover strategy** – run both systems in parallel for a short window, redirect new writes to Scylla, then switch traffic.

**Depth**  
- *Throughput*: Scylla’s low‑latency kernels can reach 30 k IOPS per node vs ~3 k in Cassandra on the same hardware.  
- *Cost*: Fewer nodes needed → reduced storage and power consumption.  
- *Complexity*: SSTable format is identical, so loaders are almost drop‑in; only minor tuning of compaction parameters required.

**Edge Cases**  
- **Hot partitions**: if a user’s chat history exceeds the node capacity, we shard further or use anti‑entropy repair.  
- **Schema changes mid‑migration**: versioned CQL and feature flags prevent write failures.  
- **Network partition**: rollback plan to replay lost batches from Cassandra.

**Optimize & Communicate**  
After migration, monitor latency (target < 5 ms), throughput, and storage cost. Present metrics in dashboards; iterate on compaction strategies. Explain that the key advantage is a near‑zero‑downtime cutover while dramatically improving performance for a service with billions of concurrent users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
