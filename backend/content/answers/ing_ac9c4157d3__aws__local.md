---
qid: ing_ac9c4157d3__aws__local
question: 'Explain: :star: Real world use cases of RocksDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 475
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:56:05-05:00'
sources: []
---

**Situation & Task (Ownership + Customer Obsession)**  
When we migrated the real‑time recommendation engine from a legacy MySQL store to an embedded key‑value layer, I owned the end‑to‑end redesign. The goal was to reduce latency from 120 ms to <30 ms while keeping per‑request cost under $0.001 and ensuring 99.9 % availability for our 2 M daily active users.

**Action (Dive Deep + Bias for Action)**  
I chose **RocksDB** as the embedded engine because of its tunable compaction strategy, write‑ahead log, and support for SSD locality.  
* **Schema & partitioning:** Each user’s interaction vector was stored in a sharded RocksDB instance per EC2 spot fleet (8 GB RAM, 1 TB NVMe).  
* **Hot data caching:** Frequently accessed keys were preloaded into an in‑memory `BlockCache` (32 MB) to hit 99.7 % of reads in <5 µs.  
* **Write pipeline:** We used asynchronous batch writes with `MergeOperator` for incremental counters, eliminating per‑write disk seeks.  
* **Monitoring & scaling:** CloudWatch metrics (`rocksdb.num-entries`, `rocksdb.block-cache-hit-rate`) triggered an autoscaling policy that spun up a new shard when cache hit fell below 95 %.  

**Result (Deliver Results)**  
Latency dropped to **22 ms** on average, a **78 %** improvement. The per‑request cost decreased from $0.003 to $0.0007, saving ~$250K/month. Uptime stayed at **99.94 %**, surpassing the SLA.  

**Learnings (Invent & Simplify)**  
The key was treating RocksDB as a first‑class service—tuning compaction, cache, and merge operators—rather than a black box. Future iterations will experiment with `ReadOnly` mode for cold data to further reduce I/O.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
