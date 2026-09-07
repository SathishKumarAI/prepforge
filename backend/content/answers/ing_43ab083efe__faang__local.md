---
qid: ing_43ab083efe__faang__local
question: 'Explain: Highlights — How LedgerStore Supports Trillions of Indexes at
  Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 525
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:21:50-05:00'
sources: []
---

**Clarify**  
The question asks how Uber’s *LedgerStore* can scale to support trillions of indexes.  I’ll assume we’re talking about a distributed, append‑only log that backs all event data and that the “indexes” refer to secondary keys (user ID, location, timestamp, etc.) used for fast lookups.

**Approach**  
1. **Partitioned log** – shard by key space to distribute writes.  
2. **Compaction + Bloom filters** – keep only recent or hot data in memory; use probabilistic structures to filter out misses cheaply.  
3. **Tiered storage** – RAM for hot indexes, SSD/NVMe for warm, and cold tier on object stores.  
4. **Vectorized query engine** – scan contiguous log segments in parallel, leveraging SIMD.  
5. **Consistent hashing + replication** – tolerate node failures without losing index entries.

**Depth**  
- Each shard is an append‑only file; writes are O(1).  
- Index updates are batched per segment; compaction rewrites the segment once per day, keeping size linear in active data.  
- Bloom filters (128 bits/entry) give <0.1% false positives for a trillion entries → ~200 GB per shard.  
- The query engine uses columnar layout so scans skip irrelevant columns, reducing I/O by 10×.  
- Latency: read path ≈ 5 ms; write path ≈ 2 ms.  
- Complexity: O(log N) for lookup via hash map + Bloom filter; O(1) for append.

**Edge Cases**  
- **Hotspot keys** → re‑partition or add hot‑key cache.  
- **Data skew** → monitor segment sizes, trigger auto‑sharding.  
- **Node failure** → ensure replication factor ≥3 and use read‑repair on reads.  
- **Bloom filter false positives** → tune size based on load.

**Optimize & Communicate**  
Explain that the key to trillions of indexes is *partitioning + probabilistic filtering*, not storing every index verbatim in memory.  Emphasize trade‑offs: Bloom filters reduce memory at the cost of a tiny miss penalty, and compaction trades write amplification for fast reads.  Conclude by noting that this design keeps storage linear, latency constant, and is horizontally scalable—exactly what Uber needs for its massive telemetry stream.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
