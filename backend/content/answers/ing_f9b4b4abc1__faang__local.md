---
qid: ing_f9b4b4abc1__faang__local
question: 'Explain: Write Path — How LedgerStore Supports Trillions of Indexes at
  Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 625
total_tokens: 865
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:20:18-05:00'
sources: []
---

**Clarify**  
We’re asked how Uber’s *LedgerStore* can index trillions of entries—essentially a distributed key‑value store that must support fast lookups, write throughput, and high availability. I’ll assume: (1) writes are append‑only logs; (2) reads can tolerate eventual consistency; (3) data is sharded across many nodes; (4) the system needs to recover from node failures quickly.

**Approach**  
Outline a layered architecture:  
1. *Ingestion layer* that batches writes into memtables, flushing to disk as immutable SSTables.  
2. *Partitioning* using consistent hashing with virtual nodes to balance load.  
3. *Indexing* via per‑partition Bloom filters + prefix trees for secondary indices.  
4. *Replication* with a quorum protocol (e.g., Raft) for fault tolerance.  
5. *Compaction & tiered storage* to keep read latency low while pruning old logs.

**Depth**  
- **Write path:** Data lands in an L0 memtable; once full, it’s flushed asynchronously to disk as an SSTable. This gives *O(1)* write amortized cost and allows hot data to stay in memory.  
- **Read path:** Query first checks the Bloom filter (probabilistic O(1) check). If positive, a small range scan on the relevant SSTables follows; LSM‑style merges keep read amplification ~5–10x.  
- **Indexing trillions of keys:** Each partition maintains a *prefix trie* that maps key prefixes to SSTable ranges, drastically cutting search space. Secondary indices (e.g., user_id → list of trip_ids) are stored as separate immutable tables and updated via write‑ahead logs.  
- **Replication & consistency:** Raft ensures each partition has 3 replicas; writes are acknowledged on a majority, guaranteeing linearizability for critical ops while allowing reads from any replica under eventual consistency for analytics.

**Edge Cases**  
- Hot partitions can starve others → dynamic rebalancing of virtual nodes.  
- Bloom filter false positives inflate read cost → tune size per partition.  
- Compaction stalls if too many small files → background compaction with merge‑threshold heuristics.  

**Optimize & Communicate**  
To reduce storage, we employ *deduplication* across SSTables and compress using LZ4. For latency, we expose an in‑memory cache of hot keys (e.g., via a memcached layer). I’d present this architecture by walking through a write–read cycle on paper, highlighting trade‑offs between throughput vs consistency, and ending with key metrics: 100k ops/sec per node, <5 ms read latency for 99th percentile, 3× replication factor. This showcases clear problem framing, concrete design decisions, complexity analysis, and real‑world tuning—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
