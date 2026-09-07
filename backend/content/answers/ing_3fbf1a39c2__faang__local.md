---
qid: ing_3fbf1a39c2__faang__local
question: 'Explain: How Sharding Works — A Crash Course on Database Sharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 570
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:12:05-05:00'
sources: []
---

**Clarify**  
The question asks for a concise explanation of *database sharding*: partitioning data across multiple nodes so that each holds only a subset (“shard”). I’ll assume we’re talking about horizontal sharding (rows split), not vertical or hybrid schemes, and focus on the mechanics rather than specific engines.

**Approach**  
1. Define sharding and its goals (scale‑out, locality).  
2. Explain shard keys & placement.  
3. Outline routing logic (lookup table/consistent hashing).  
4. Touch on data consistency and cross‑shard joins.  
5. Mention common pitfalls.

**Depth**  

| Step | What Happens | Example |
|------|--------------|---------|
| **1. Shard key selection** | Pick a column that distributes evenly (user_id, geo). | `SELECT * FROM orders WHERE user_id = 12345` → shard #7 |
| **2. Data placement** | Each node stores only rows whose key maps to it. | Node A: keys 0‑9999; Node B: 10 000‑19 999, … |
| **3. Routing** | Client or proxy consults a *shard map* (hash table or consistent hash ring) to forward the query. | Consistent hashing keeps most queries on the same node after adding/removing shards. |
| **4. Operations** | Reads hit one shard; writes update that shard only. Joins across shards need either application‑level aggregation or a distributed transaction engine. | Aggregating total sales per country may require pulling data from all nodes and summing locally. |
| **5. Rebalancing** | When scaling, move key ranges to new nodes; use online migration to avoid downtime. | Split shard #3 into #3a & #3b while keeping old data accessible. |

**Edge Cases**  
- *Hot keys*: a single user generating all traffic → shard hotspot; mitigate with range splits or key hashing.  
- *Uneven distribution*: poor shard key leads to imbalance; monitor and rebalance.  
- *Cross‑shard joins*: expensive; redesign schema or use materialized views.

**Optimize & Communicate**  
- Use consistent hashing to minimize data movement during scaling.  
- Cache the shard map in memory (e.g., ZooKeeper, etcd) for low latency routing.  
- Adopt a “write‑once, read‑many” pattern to keep cross‑shard reads minimal.  

By outlining goals → mechanics → pitfalls, we satisfy FAANG interviewers’ emphasis on structured reasoning and depth while staying within 160–240 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
