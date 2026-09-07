---
qid: ing_2e6ed44e28__faang__local
question: 'Explain: Vertical Scaling — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 492
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:31:16-05:00'
sources: []
---

**Clarify**  
You’re asking how to *vertically* scale a database system—i.e., adding more resources (CPU, RAM, SSD) to a single node so it can handle higher load. I’ll assume we’re dealing with an OLTP‑style relational store that can’t be sharded yet and that we need to keep the same schema and application logic unchanged.

**Approach**  
1. Profile current bottlenecks (CPU, memory, I/O, lock contention).  
2. Upgrade the host: larger CPU cores, more RAM for buffer pool, faster NVMe storage.  
3. Tune configuration: increase buffer pool size, adjust connection limits, enable multi‑threaded query execution.  
4. Add read replicas if the workload is read‑heavy; keep writes on the master.

**Depth**  
- **CPU**: More cores let the DB engine parallelize work; set `max_parallel_workers_per_gather` (PostgreSQL) or `innodb_thread_concurrency`.  
- **Memory**: Larger buffer pool (`innodb_buffer_pool_size`, `shared_buffers`) keeps hot data in RAM, reducing disk I/O.  
- **Storage**: NVMe SSDs cut latency from ~10 µs to <1 µs; use RAID‑0 for throughput if fault tolerance isn’t critical.  
- **Configuration**: Tune autovacuum thresholds, adjust query cache size (MySQL), enable write‑ahead logging tuning.  
Complexity remains O(1) per request but with higher constants; cost scales linearly with hardware.

**Edge Cases**  
- Hot spot tables still hit the same node → consider sharding later.  
- Memory oversubscription leads to swapping—monitor `vmstat`.  
- Single‑point failure: if the upgraded node crashes, all traffic drops. Use replication or a failover cluster.

**Optimize & Communicate**  
Explain that vertical scaling is a quick win for moderate growth but has limits (Amdahl’s law). Present benchmark results before/after, show CPU/RAM utilization curves, and outline when to pivot to horizontal scaling (sharding, read replicas) if throughput caps out. This narrative demonstrates structured problem solving, depth in configuration, and awareness of trade‑offs—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
