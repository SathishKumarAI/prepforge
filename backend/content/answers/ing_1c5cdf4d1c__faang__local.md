---
qid: ing_1c5cdf4d1c__faang__local
question: 'Explain: LSM-Tree Databases — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 492
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:50:45-05:00'
sources: []
---

**Clarify**  
We’re asked how Bloom filters accelerate reads in an LSM‑tree database (e.g., RocksDB, LevelDB). Assume a typical write‑ahead log + sorted runs on disk with compaction and that read paths first probe the latest memtable, then level files.  

**Approach**  
1. Describe the LSM layout and read flow.  
2. Explain Bloom filter purpose: skip unnecessary file seeks.  
3. Show how filters are built per SSTable, stored alongside metadata.  
4. Discuss false‑positive handling and compaction impact.  

**Depth**  
- An LSM has a memtable (in‑memory) + immutable SSTables at each level. Reads hit the memtable, then scan the levels in order.  
- A Bloom filter is a bit array with *k* hash functions; it records whether a key might exist in an SSTable.  
- For each SSTable, build its Bloom filter once during compaction. Store the filter (or a compressed sketch) in the table’s footer.  
- On read: after memtable miss, query the filter for level‑i files. If the filter says “absent,” skip disk I/O for that file; otherwise perform a binary search on its key range.  
- False positives lead to an extra seek but never a false negative.  
- The filter size is tuned (e.g., 10–20 bits/key) to keep the false‑positive rate ~1–5%.  

**Edge Cases**  
- Very small SSTables: Bloom filter overhead may dominate; some engines skip filters for < N bytes.  
- High write rates cause frequent compactions → rebuilding many filters, impacting CPU.  
- Deletions: tombstones still appear in tables; the filter will return true but read logic must check expiration.  

**Optimize & Communicate**  
- Use *k* ≈ log(1/false‑positive) for optimal hash count.  
- Store a single compact Bloom per level to reduce metadata size if memory allows.  
- Profile read latency vs. filter size; adjust the bits/key trade‑off accordingly.  
- When explaining, emphasize that Bloom filters convert many costly disk seeks into cheap bit checks, dramatically lowering read amplification in LSM systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
