---
qid: ing_de56085bcc__faang__local
question: 'Explain: Shards — What is Database Sharding? - Shard DB Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 411
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:16:00-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise, interview‑ready explanation of *database sharding*—how large data sets are split across multiple servers (shards) to scale horizontally. I’ll assume you want the key concepts, typical use cases, and trade‑offs, not a deep dive into specific engines.

**Approach**  
1. Define sharding and its purpose.  
2. Explain how data is partitioned (key‑based, range, hash).  
3. Highlight benefits (throughput, storage, fault isolation).  
4. Note common pitfalls and management overhead.  

**Depth**  
Sharding partitions a database into *shards*, each residing on a separate node or cluster. A **shard key** (user ID, geographic region, etc.) deterministically maps rows to shards—via range, hash, or directory lookup. Reads/writes hit only the relevant shard, so latency drops and parallelism rises. In distributed SQL (e.g., Aurora Global) or NoSQL (Cassandra, DynamoDB), sharding is built‑in; in legacy RDBMSs you implement it manually or via middleware.

**Edge Cases**  
- **Skewed keys**: uneven load if key distribution is non‑uniform.  
- **Cross‑shard joins/aggregations**: expensive and often avoided.  
- **Rebalancing**: moving data when adding/removing shards can be costly.  

**Optimize & Communicate**  
Emphasize that sharding solves *scalability* but adds *complexity*: schema design, routing logic, and consistency guarantees (e.g., eventual vs strong). Mention modern solutions like AWS Aurora Global or DynamoDB Global Tables that abstract most of this overhead. Conclude with the trade‑off: higher throughput at the expense of operational complexity and potential data locality challenges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
