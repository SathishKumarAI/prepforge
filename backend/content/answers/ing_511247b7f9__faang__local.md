---
qid: ing_511247b7f9__faang__local
question: 'Explain: Costs of Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 460
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:52:49-05:00'
sources: []
---

**Clarify**  
We’re asked how indexing in a database impacts cost—both performance and resource usage. I’d confirm whether the focus is on *read* vs *write* latency, storage overhead, or maintenance (rebuilds), and which DBMS or engine (B‑tree, LSM, etc.) we’re targeting.

**Approach**  
1. List the primary cost dimensions: disk I/O, memory pressure, CPU, write amplification, and admin effort.  
2. For each dimension, explain how an index changes that metric.  
3. Contrast common index types (B‑tree vs hash vs columnstore) to illustrate trade‑offs.

**Depth**  
- **Read latency:** A B‑tree index reduces page lookups from *O(n)* to *O(log n)*; however each lookup still incurs at least one disk seek, so the benefit scales with table size.  
- **Write latency & throughput:** Every insert/update/delete must update the index structure—extra I/O and CPU. In LSM‑based stores (e.g., Cassandra), this manifests as write amplification and compaction overhead.  
- **Storage cost:** Index pages occupy disk space; a wide column or many composite keys can double table size.  
- **Memory & cache pressure:** Larger indexes evict hot data from buffer pools, increasing cache misses.  
- **Maintenance:** Periodic rebuilds or vacuuming add downtime and resource spikes.

**Edge Cases**  
- Highly write‑heavy tables where index maintenance outweighs read gains.  
- Sparse vs dense columns: a selective column yields high cardinality, boosting index usefulness but also size.  
- Partitioned tables—indexes may need to be replicated per partition, inflating cost.

**Optimize & Communicate**  
Recommend a cost‑benefit analysis: benchmark query latency with and without the index; monitor write amplification in LSM stores; use histogram stats to decide on composite vs single columns. Communicate that indexing is a *resource trade‑off*: you gain read speed at the expense of writes, storage, and ops overhead—exact balance depends on workload patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
