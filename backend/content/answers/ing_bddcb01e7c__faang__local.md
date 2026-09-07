---
qid: ing_bddcb01e7c__faang__local
question: 'Explain: Indexing — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 450
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:04:00-05:00'
sources: []
---

**Clarify**  
You’re asking how to design an index‑driven storage layer that can scale horizontally while keeping query latency low. Key assumptions: *write‑heavy workload*, *read‑mostly queries on a few hot columns*, and *distributed data store* (e.g., NoSQL or sharded RDBMS). Ask whether we need eventual consistency, what read/write ratios are expected, and the size of hot keys.

**Approach**  
1. Partition data by a hash or range key to spread load.  
2. Build secondary indexes per hot column; store them as separate key‑value pairs pointing to primary records.  
3. Use *write‑through* caching (e.g., Redis) for the most frequently accessed index entries.  
4. Replicate index shards across nodes with quorum reads/writes for fault tolerance.

**Depth**  
- **Write path:** update primary record → enqueue async job to rebuild index shard; keep a write‑ahead log so we can replay if a node fails. Complexity: O(1) per field, amortized over batch updates.  
- **Read path:** query index → get list of primary keys → fetch records (batched). Latency is dominated by the fastest shard read; using consistent hashing keeps skew minimal.  
- **Consistency model:** eventual consistency for indexes; strong consistency only when necessary via two‑phase commit across shards.

**Edge Cases**  
- Skewed hot keys: use *hotspotting*—split a single key into multiple sub‑keys (e.g., user_id#1, #2).  
- Index bloat: purge stale entries with TTL or background compaction.  
- Schema evolution: add new index columns without downtime by incremental materialization.

**Optimize & Communicate**  
Explain trade‑offs: tighter consistency → higher latency; aggressive caching → memory cost. Suggest monitoring key metrics (index hit rate, replication lag). Conclude that a sharded, write‑through cache + async index rebuild strategy gives linear scalability while keeping read performance predictable—exactly what FAANG teams look for in production ML feature stores.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
