---
qid: ing_26f3840519__faang__local
question: 'Explain: Index lifecycle state machine — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 453
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:14:06-05:00'
sources: []
---

**Clarify**  
The question asks how Uber’s *LedgerStore* can maintain a **trillion‑plus index entries** while still keeping the system fast and reliable. I’ll assume we’re dealing with read/write throughput, fault tolerance, and eventual consistency across a global data center.

**Approach**  
1. **Index partitioning & sharding** – split by key ranges so each node owns a manageable slice.  
2. **State machine replication (Raft/RAFT‑style)** – guarantees linearizable writes per shard.  
3. **Compaction & tombstone pruning** – periodically merge index files, discard expired keys.  
4. **Tiered storage** – hot indices in SSD, cold ones on HDD or object store.  
5. **Bloom filters + prefix trees** – speed up lookups and reduce disk I/O.

**Depth**  
- *Shard size*: ~10 GB per node → 100 k shards for a trillion keys.  
- *Raft log*: each write appends to the shard’s log; followers replay logs, ensuring consistency.  
- *Compaction*: run background jobs that merge sorted runs (like LSM‑trees) and remove deleted entries—O(log n) per operation.  
- *Storage tiering*: hot shards in memory/SSD with a 1 ms latency target; cold shards lazily fetched from S3, incurring ~200 ms but keeping cost down.  
- *Fault tolerance*: leader election + quorum ensures no data loss; replication factor 3.

**Edge Cases**  
- Sudden traffic spikes → auto‑scale shards.  
- Node failure during compaction → rollback to last stable snapshot.  
- Key range skew → dynamic re‑sharding.

**Optimize & Communicate**  
Explain trade‑offs: tighter sharding reduces per‑node load but increases metadata overhead; aggressive compaction saves space but raises CPU cost. Highlight that LedgerStore’s design balances **write throughput**, **latency guarantees**, and **storage economics**, enabling Uber to support trillions of indexes at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
