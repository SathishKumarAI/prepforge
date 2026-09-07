---
qid: ing_ea35ed0f32__faang__local
question: 'Explain: this table we have to keep all — AWS re:Invent 2018: Amazon DynamoDB
  Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 520
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:44:31-05:00'
sources: []
---

**Clarify**  
You’re asking why a DynamoDB table must retain *all* of its items—no pruning or compaction—and how that design supports the system’s scale and latency guarantees. I’ll assume we’re talking about a single‑region, provisioned‑throughput table that can grow to many petabytes.

**Approach**  
1. Describe DynamoDB’s storage layout (partition key → physical partitions).  
2. Explain the “write‑once, read‑many” model and how it eliminates compaction.  
3. Connect this to latency, fault tolerance, and cost.  

**Depth**  
- **Partitioning**: Each item is stored in a *shard* identified by a hash of its partition key. Shards are immutable; new items go into the same shard or a new one if capacity is exceeded.  
- **No compaction**: Because every write creates a new record (append‑only), DynamoDB never rewrites existing data. This removes garbage collection, ensures that reads hit only the latest version, and keeps I/O linear.  
- **Read consistency**: Reads can return the most recent item by consulting the shard’s head pointer; no background merge is needed.  
- **Fault tolerance**: Replication occurs at the shard level (3‑node R‑1W‑1), so losing a node doesn’t require re‑balancing or data movement—just failover to replicas.  
- **Cost model**: Append‑only writes mean storage cost is predictable; no extra I/O for compaction.

**Edge cases**  
- *Hot partitions*: Over‑loaded keys can cause throttling; sharding mitigates this.  
- *TTL expiration*: Even when items expire, the record remains until GC in the background—no impact on throughput.  

**Optimize & communicate**  
I’d highlight that keeping all data simplifies consistency guarantees and keeps latency O(1). If we needed to delete old versions aggressively (e.g., for GDPR), we could layer a compaction service that snapshots shards offline, but at the cost of added complexity. In an interview I’d finish by stressing how this “write‑once” design underpins DynamoDB’s hyper‑scale claims and aligns with AWS’s low‑cost, high‑availability strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
