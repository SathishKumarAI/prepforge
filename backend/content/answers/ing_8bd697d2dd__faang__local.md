---
qid: ing_8bd697d2dd__faang__local
question: 'Explain: Database Replication & Backups — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 489
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:09:28-05:00'
sources: []
---

**Clarify**  
*Goal:* design a scalable, highly‑available database layer for an app like Instagram that supports millions of users, photo uploads, likes, comments, and real‑time feeds.  
Key assumptions to confirm: write/read ratios, latency budget (<200 ms), consistency model (eventual vs strong), geographic distribution (US/Europe/Asia), backup frequency & retention, and cost constraints.

**Approach**  
1. **Primary–secondary replication** with a leader per shard for writes, followers for reads.  
2. Use *asynchronous* streaming (Kafka/Flink) to propagate updates to all replicas.  
3. Employ *geo‑sharding*: split users by region; each region has its own replica set.  
4. **Backups**: incremental snapshots every 15 min stored in cold storage (S3 Glacier), full weekly restores, and point‑in‑time recovery via transaction logs.

**Depth**  
- Shard key: user_id → 1 kB rows per photo ~10 GB per shard; 100 shards → 1 TB.  
- Replication lag <500 ms for reads.  
- Consistency: read‑your‑writes on leader, eventual consistency elsewhere (optimistic concurrency).  
- Backup complexity: O(N) to copy logs, O(1) to restore a single row via index.  
- Failure handling: automatic failover using ZooKeeper; if primary dies, elect new leader within 100 ms.

**Edge Cases**  
- Network partition → split‑brain avoided by quorum reads.  
- Rapid burst of uploads (e.g., viral photo) → hot‑spot mitigation via consistent hashing + virtual nodes.  
- Backup corruption → dual‑storage (S3 + on‑prem tape).

**Optimize & Communicate**  
- **Latency:** cache hot feeds in Redis; batch writes to reduce replication overhead.  
- **Cost:** compress snapshots, tiered storage for infrequently accessed old media.  
- **Narrative:** “We start with a write‑optimized leader shard, replicate asynchronously to followers so reads stay fast. Backups are incremental and stored in cost‑effective cold storage, giving us 30‑day retention while keeping the system responsive.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
