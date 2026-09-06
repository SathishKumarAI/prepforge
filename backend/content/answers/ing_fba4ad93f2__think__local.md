---
qid: ing_fba4ad93f2__think__local
question: 'Explain: 2013 - Replication — How Redis Architecture Evolved'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 609
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:37:04-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**

- *What is “Replication – How Redis Architecture Evolved”?*  
  I interpret it as a historical overview of how Redis’s replication model has changed from version 2013 onward, focusing on architectural shifts (master‑slave, AOF, Redis Cluster, etc.).  
- *Assume the reader knows basic Redis concepts but not the timeline.*  

**2️⃣ Adopt a “timeline + architecture” framework**

| Year | Architectural change | Key idea |
|------|-----------------------|----------|
| 2013 | Initial master–replica with synchronous writes? | Basic read‑scale replication. |
| 2014 | Introduction of AOF for durability | Combine RDB + AOF for crash recovery. |
| 2015 | Redis 2.8 – configurable replica promotion | Replication can be promoted to master. |
| 2016 | Redis 3.0 – “replica” terminology, lazy replication | Reduce latency on writes. |
| 2017 | Redis 4.x – Partial resynchronization (PSYNC) | Faster failover and scaling. |
| 2018 | Redis 5 – Redis Cluster, sharding + replication | Horizontal scale with automatic rebalancing. |

Use this table to structure the explanation.

**3️⃣ Step‑by‑step reasoning**

1. Start with the 2013 state: single master, replicas read only, synchronous replication via `REPLICAOF`.  
2. Highlight limitations (single point of failure, lack of durability).  
3. Show how AOF was added to provide append‑only logging and why it mattered for replication safety.  
4. Explain incremental changes in 2015–2016: lazy replication and replica promotion, which reduced write latency and allowed replicas to become masters.  
5. Discuss PSYNC (partial sync) introduced later to avoid full resync on failover, cutting downtime.  
6. Conclude with Redis Cluster’s arrival: sharding + built‑in replication per shard, making the architecture truly distributed.

**4️⃣ Avoid common traps**

- Don’t conflate *durability* with *replication*.  
- Don’t assume all versions used “master–slave”; terminology changed to “primary–replica”.  
- Remember that AOF is an **append‑only file**, not a replication mechanism per se.  

**5️⃣ Sanity‑check & verbalize**

- Verify dates against official release notes or the Redis blog.  
- Rephrase each bullet in plain language: “In 2018, Redis introduced Cluster to split data across nodes while still keeping replicas for each shard.”  
- Ask yourself: does this answer “how did the architecture evolve?”? If yes, you’re done; if not, add missing milestones (e.g., `PSYNC2` or `RAFT‑based` experimental features).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
