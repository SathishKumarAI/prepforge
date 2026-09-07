---
qid: ing_0d15e3bfb6__faang__local
question: 'Explain: Read Path — How LedgerStore Supports Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 489
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:14:24-05:00'
sources: []
---

**Clarify**

The question asks how **LedgerStore’s “Read Path” can efficiently support trillions of indexes** for Uber’s massive data store.  
Assumptions: we’re dealing with a write‑heavy distributed ledger that must provide low‑latency reads across billions of records, and the index space is in the trillions due to multi‑dimensional attributes (e.g., driver ID, time, location).

---

**Approach**

1. **Partitioned, columnar storage** → each shard holds a contiguous range of keys.  
2. **Bloom‑filter + bit‑vector** per shard to reject non‑existent keys quickly.  
3. **Sparse multi‑index tree (e.g., LSM‑tree with secondary indexes)** that spills to disk in sorted runs.  
4. **In‑memory “hot” cache of recent index prefixes** plus a distributed hash for global lookups.  

---

**Depth**

- *Read Path*:  
  - Query → lookup Bloom filter; if false, skip shard.  
  - If true, consult the bit‑vector to locate the exact LSM run containing the key.  
  - Retrieve the value from the corresponding sorted file using a binary search on the offset list.  
- Complexity: **O(log n)** per shard with *O(1)* Bloom filter check; overall latency dominated by disk seek (≈5–10 ms).  
- Trade‑offs: higher memory for Bloom filters reduces false positives but increases RAM usage.

---

**Edge Cases**

- Hot spots: re‑partition or add hot cache nodes.  
- Data skew: use adaptive compaction to balance shard sizes.  
- Failure: maintain immutable checkpoints; replay via WAL if needed.

---

**Optimize & Communicate**

To reduce latency further, we can:
1. **Prefetch adjacent index ranges** during read bursts (read‑ahead).  
2. **Employ RDMA** for inter‑node cache fetches.  
3. Use **adaptive Bloom filter sizing** based on observed false‑positive rates.

By explaining the layered design—Bloom filters → bit‑vectors → LSM secondary indexes—we demonstrate a clear, scalable solution that aligns with Uber’s need to read across trillions of indexes efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
