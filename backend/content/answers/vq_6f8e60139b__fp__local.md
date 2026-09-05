---
qid: vq_6f8e60139b__fp__local
question: When running a JOIN query, I see out-of-memory errors.?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 376
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:40:06-05:00'
sources: []
---

When two tables are joined, every row from the first table may have to be compared against many rows from the second.  
At its core this is a *pairwise comparison* problem: we must hold in memory all candidate pairs that can match until the engine decides which ones survive.  

Why OOM?  
1. **Cartesian explosion** – if the join key has low cardinality, the number of possible matches explodes (|A|×|B|).  
2. **Hash‑based plan** – most engines build a hash table for the smaller side; the size of that table is proportional to distinct keys *and* the associated rows. If the smaller side still contains millions of distinct values, the hash grows beyond available RAM.  
3. **Sort‑merge fallback** – when hashing fails, a sort‑merge plan sorts both sides on the join key. Sorting requires an in‑memory buffer; if the data exceeds this buffer, spills to disk are costly and can exhaust virtual memory.

The deeper principle is *space–time trade‑off*: to avoid recomputing matches, we store them temporarily. If the storage cost outweighs the benefit of avoiding re‑scans, the engine throws an OOM.

**Non‑obvious insight:**  
Most people tune `work_mem` or choose a smaller join key, but they overlook *data skew*. A few hot keys can dominate the hash table size while the rest remain tiny. Detecting and handling skew (e.g., by partitioning on a surrogate hash of the key) is often cheaper than increasing memory or rewriting the query.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
