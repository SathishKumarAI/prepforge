---
qid: ing_2ba77dfa04__faang__local
question: 'Explain: Shared-nothing architecture — What is Database Sharding? - Shard
  DB Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 410
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:24:30-05:00'
sources: []
---

**Clarify**  
You’re asking how a shared‑nothing system divides a database into shards—essentially independent partitions that run on separate nodes. I’ll assume we’re talking about horizontal partitioning (rows), not vertical, and that the goal is to scale read/write throughput while keeping each node autonomous.

**Approach**  
1. Explain what “shared‑nothing” means: no single point of contention; each node owns its disk, memory, CPU.  
2. Define a shard as a self‑contained subset of data (e.g., users with IDs 1–100M).  
3. Describe the routing layer that maps a key to a shard—hash or range.  
4. Mention consistency models and how cross‑shard joins are handled (application logic, two‑phase commit, etc.).  

**Depth**  
- *Horizontal partitioning*: each row stored on one node; queries target only relevant shards.  
- *Routing* uses consistent hashing to distribute load and allow smooth scaling.  
- *Transactions*: single‑shard ops are local; multi‑shard requires distributed transaction protocol or eventual consistency.  
- *Replication*: each shard can be replicated for fault tolerance, still within the shared‑nothing paradigm.  

**Edge Cases**  
- Skewed data → hotspot shards; need rebalancing.  
- Join across many shards → performance hit; may require denormalization or materialized views.  
- Schema changes: must propagate to all shards or use a schema‑migration tool.

**Optimize & Communicate**  
Highlight that sharding gives linear scalability but trades off simplicity of joins and increases operational overhead. Explain how AWS DynamoDB’s partitioning is an example, and contrast with relational engines like Aurora Serverless that abstract the sharding layer. Conclude by stressing monitoring: shard health metrics, latency, and automated re‑sharding scripts are essential for a production system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
