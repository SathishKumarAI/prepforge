---
qid: ing_15daeace95__faang__local
question: 'Explain: Need for high availability — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 429
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:34:00-05:00'
sources: []
---

**Clarify**  
The interviewer asks why we need *high‑availability* in a sharded MongoDB deployment and how sharding addresses it. I’ll confirm that we’re talking about *distributed data stores* used for read/write workloads, not just single‑node setups.

**Approach**  
1. Define high‑availability (HA) – no single point of failure; continuous service despite node or network faults.  
2. Outline MongoDB’s sharding components: **mongos**, **config servers**, **shard replicasets**.  
3. Show how each component contributes to HA.

**Depth**  
- **Config servers** are run as a 3‑node replica set; if one fails, the remaining two keep metadata available.  
- Each **shard** is itself a replica set (≥3 nodes). Reads can be served from any node; writes go to the primary and replicated asynchronously. If the primary dies, an election picks a new one in ~1 s, keeping the shard online.  
- The **mongos router** is stateless; you run many of them behind a load balancer so that if one mongos crashes, traffic simply goes elsewhere.  
- Sharding distributes data across shards, so a failure in one shard only affects its portion of the keyspace, not the entire cluster.

**Edge Cases**  
- Network partitions: split‑brain is avoided by replica set voting rules.  
- Disk failures: automatic failover to secondaries; data loss risk is mitigated by replication factor ≥3.  
- Upgrade windows: can roll out changes shard‑by‑shard without downtime.

**Optimize & Communicate**  
Explain trade‑offs: more replicas → higher latency, storage cost; fewer shards → less parallelism. Mention monitoring (mongostat, ops manager) to preempt failures. Conclude that sharding + replica sets give *continuous availability* while scaling horizontally—exactly what large‑scale services like Netflix or Google require.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
