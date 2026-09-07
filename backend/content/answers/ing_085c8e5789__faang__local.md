---
qid: ing_085c8e5789__faang__local
question: 'Explain: Company — How LedgerStore Supports Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 475
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:03:54-05:00'
sources: []
---

**Clarify**  
*Problem:* How does Uber’s “LedgerStore” scale to trillions of indexes while keeping query latency low?  
*Assumptions I’d confirm:*  
1. Indexes are key‑value pairs that must be read/written at millions of ops/sec.  
2. Latency requirements < 10 ms for most traffic.  
3. Data is partitioned by user/region and replicated for fault tolerance.

**Approach**  
1. Partition the index space into *shards* (hash‑based).  
2. Use a *log‑structured merge tree* (LSM) per shard, writing to an append‑only log first.  
3. Batch writes → compaction into sorted SSTables; keep recent data in memory (memtable).  
4. Maintain a lightweight *in‑memory bloom filter* and *min/max index* for each SSTable to skip reads quickly.

**Depth**  
- **Write path:** Append to memtable → flush to disk as an LSM segment; O(1) amortized.  
- **Read path:** Bloom filter → if hit, probe SSTables from newest to oldest; binary search in sorted array gives O(log n).  
- Replication: Each shard is replicated 3× across datacenters; consensus via Raft for writes.  
- Consistency: Eventual consistency with read‑repair on miss.  
- Complexity: Write ≈ O(1) amortized, Read ≈ O(log k + r) where k = #SSTables per shard, r = result size.

**Edge Cases**  
- Hot shards → re‑shard or add more replicas.  
- Compaction lag causing read amplification → tune compaction window.  
- Bloom filter false positives → increase bitmap size or use CBFs.

**Optimize & Communicate**  
Explain trade‑offs: LSM gives high write throughput but may incur read amplification; mitigated by bloom filters and caching. Highlight that scaling to trillions of indexes is achieved through horizontal partitioning, log‑structured storage, and lightweight metadata per SSTable—ensuring low latency while remaining cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
