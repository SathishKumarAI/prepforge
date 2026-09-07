---
qid: ing_12a47592a6__faang__local
question: 'Explain: How Discord Stores Trillions of Messages'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 528
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:26:55-05:00'
sources: []
---

**Clarify**  
*Problem:* Describe how a platform like Discord can persist and serve **trillions** of chat messages at low latency.  
*Assumptions to confirm:* (1) Users generate billions of messages per day; (2) Messages must be searchable, ordered by channel/time; (3) The system tolerates eventual consistency for read‑heavy workloads; (4) Storage cost and fault tolerance are critical.

**Approach**  
1. **Horizontal partitioning (sharding)** of the message store across many nodes.  
2. **Append‑only log per shard** to preserve order and simplify writes.  
3. **Tiered storage:** hot data in SSDs, warm/cold data in cheaper object stores.  
4. **Indexing** for channel/user/keyword lookups (e.g., inverted index).  
5. **Replication & erasure coding** for durability.

**Depth**  
- Each shard hosts a **partitioned log** (`topic` → `shard`) with offsets as primary keys; writes are O(1) appends.  
- **B‑tree or LSM‑tree** structures back secondary indexes (channel→offset ranges).  
- For search, use a distributed **inverted index** built on top of the log (like ElasticSearch) but keep it read‑only per shard to avoid contention.  
- Replicate each shard across 3 nodes; use **erasure coding** for cold shards to reduce storage cost while keeping recovery fast.  
- Consistency: *Eventual* for cross‑shard queries, *strong* within a shard (leader election via Raft).  
- Complexity: Write O(1), read O(log N) for index lookup + O(1) log fetch; storage ~1.5× raw data due to metadata/replication.

**Edge Cases**  
- **Shard failure:** leader failover + data replay from logs.  
- **Hot shard spike:** add a new partition and re‑balance.  
- **Large deletions (DMs purge):** mark as tombstones, lazy compaction.  

**Optimize & Communicate**  
Explain trade‑offs: using append‑only logs simplifies concurrency; tiered storage cuts costs but adds read latency for cold data; replication guarantees availability at the cost of write throughput. Highlight monitoring (latency per shard) and auto‑scaling policies. This structured narrative shows deep technical understanding while keeping the explanation concise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
