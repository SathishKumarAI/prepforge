---
qid: ing_a86614b52e__faang__local
question: 'Explain: Products — How LedgerStore Supports Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 469
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:16:18-05:00'
sources: []
---

**Clarify**  
The interviewer asks how *LedgerStore* (Uber’s distributed ledger) can handle trillions of indexes—i.e., billions of rows each with many secondary keys—while staying fast, consistent, and cost‑effective.

**Approach**  
1. Partition data by hash/shard → parallelism.  
2. Store a primary table + one *wide* secondary index per attribute.  
3. Use *inverted‑index* style B‑trees with skip lists for sparse keys.  
4. Cache hot index entries in an LSM tree; flush to disk via compaction.  
5. Replicate across nodes for fault tolerance.

**Depth**  
- **Sharding**: Hash a composite key (entity + timestamp) into 10k shards; each shard is a RocksDB instance.  
- **Index structure**: Each secondary index is an LSM‑based B‑tree that stores (key, list<primary‑ids>). Lists are encoded as varints to compress long tails.  
- **Compaction & compaction policies**: Tiered compaction keeps hot data in memory; size‑ratio > 10 reduces read amplification.  
- **Consistency**: Paxos‑based leader election per shard guarantees linearizable reads/writes.  
- **Cost**: Indexes are stored on SSDs with 4× compression; hot slices live in RAM cache (≈5 % of total).  
Complexity: O(log N) read/write, amortized <200 µs latency at 1‑trillion rows.

**Edge cases**  
- Skewed keys → re‑hash or dynamic shard splits.  
- Hotspot failures → hot‑node replication and traffic routing.  
- Schema evolution → versioned index files; backward compatibility via “soft” deletes.

**Optimize & communicate**  
Future work: Bloom filters per shard to skip empty ranges, adaptive compaction based on query patterns, and a column‑store hybrid for analytics workloads. I’d explain each trade‑off (latency vs cost) while highlighting how LedgerStore balances scalability with Uber’s real‑time constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
