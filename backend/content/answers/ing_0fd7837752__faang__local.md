---
qid: ing_0fd7837752__faang__local
question: 'Explain: LSM-Tree — B-Tree vs. LSM-Tree'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 477
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:20:21-05:00'
sources: []
---

**Clarify**  
You’re asking how a Log‑Structured Merge‑Tree (LSM‑tree) differs from a traditional B‑Tree for storage systems that serve read/write workloads—think LevelDB, RocksDB, or Bigtable.

**Approach**  
1. Outline the core data structure of each.  
2. Compare write and read paths, focusing on I/O patterns.  
3. Discuss merge/compaction mechanics and their impact on performance and space.  
4. Highlight trade‑offs (latency vs throughput, storage overhead).

**Depth**  
- **B‑Tree**: Balanced multi‑way tree kept in RAM; each node is a page of sorted keys. Reads traverse log(n) nodes; writes cause split/merge updates that touch O(log n) pages, often requiring random I/O. Good for low‑latency reads but write amplification rises with hot data.  
- **LSM‑Tree**: In‑memory component (memtable) plus immutable on‑disk components (SSTables). Writes are append‑only to memtable → fast sequential writes; flushes create new SSTable, then background compaction merges levels. Reads perform a small number of seeks across the latest level and fallbacks—often 1–3 disk seeks per key. Write amplification is low, read amplification higher but mitigated by Bloom filters.

**Edge Cases**  
- *Hot writes*: B‑Tree may suffer from constant page splits; LSM handles via memtable growth.  
- *Large range scans*: B‑Tree outperforms because data remains contiguous; LSM needs to merge levels or use a secondary index.  
- *Very small workloads*: B‑Tree’s in‑memory structure can be simpler and more efficient.

**Optimize & Communicate**  
To improve LSM, tune memtable size, compaction strategy (tunable “level” vs “universal”), and Bloom filter false‑positive rates. I’d explain that the choice hinges on workload: write‑heavy analytics → LSM; low‑latency OLTP → B‑Tree. This structured answer demonstrates clear reasoning, trade‑off awareness, and practical knowledge—all key for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
