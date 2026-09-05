---
qid: ing_177b1717c0__fp__local
question: 'Explain: When to choose sharded clusters — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 397
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:55:40-05:00'
sources: []
---

### Why a sharded cluster is the right choice

**The core problem:**  
A single MongoDB server can only hold and serve as many documents as its RAM, disk throughput, and network bandwidth allow. When your *data size* or *write/read load* outgrows these physical limits, performance degrades linearly rather than staying constant.

**From first principles:**
1. **Capacity scaling is additive:**  
   Adding a node increases the aggregate storage and I/O capacity proportionally—no single point of contention.
2. **Workload locality matters:**  
   If queries target a narrow range (e.g., by user ID or time stamp), those operations can be served entirely from one shard, keeping latency low.
3. **Parallelism is limited only by the number of shards** that can process distinct ranges simultaneously.

**When to sharded‑cluster:**
- Your dataset exceeds the storage or throughput limits of a single machine.
- Read/write patterns are *range‑selective* (e.g., time series, geographic partitions) so that most queries hit a single shard.
- You need horizontal scalability without redesigning application logic.

**Non‑obvious insight:**  
Sharding is **not just for “big data.”** Even with modest size, if your workload has *skewed* query patterns (e.g., 90 % of reads on one user segment), a well‑chosen shard key can keep that hot region isolated, dramatically improving performance without adding nodes.

In short: choose sharding when you need to **decouple capacity from a single machine** and your access patterns allow *partitioned* processing—then the cluster’s linear scalability follows directly from basic storage and I/O principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
