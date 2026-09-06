---
qid: ing_15daeace95__think__local
question: 'Explain: Need for high availability — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 404
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:09:54-05:00'
sources: []
---

**1. Clarify the question & set assumptions**  
- Ask whether “high availability” refers to uptime, fault‑tolerance, or performance under load.  
- Assume a production MongoDB deployment where data size grows beyond a single node’s capacity and downtime must be minimal.

**2. Pick a mental model / framework**  
- Use the **CAP theorem** (Consistency, Availability, Partition tolerance) as a backdrop.  
- Overlay MongoDB’s architecture: *Replica Sets* for HA, *Sharding* for horizontal scaling.  

**3. Reason step‑by‑step toward the answer**  
1. Start with replica sets—each shard will be a replica set to guarantee read/write availability during node failures.  
2. Explain sharding: data is split across shards by a hashed or range key, distributing load and storage.  
3. Show how high availability is achieved *per shard* (replica set) and *across the cluster* (balancer and config servers).  
4. Discuss failure scenarios (node crash, network partition) and how MongoDB elects primaries to keep services running.  

**4. Common traps & wrong turns**  
- Don’t conflate sharding with HA; sharding is about scaling, replica sets are about HA.  
- Avoid assuming a single “shard” can fail without affecting the whole cluster—each shard’s replica set handles its own failures.  
- Beware of overlooking config servers: they must also be replicated for true HA.

**5. Sanity‑check & verbalize**  
- Verify that each component (config, query router, shards) has replication or redundancy.  
- Explain in plain terms how a client query is routed, how data is partitioned, and how the system recovers from failures—this demonstrates you understand both concepts together.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
