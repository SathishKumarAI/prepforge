---
qid: ing_90eca9a866__faang__local
question: 'Explain: Write-optimized temporary index table (called buffer index)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 559
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:21:19-05:00'
sources: []
---

**Clarify**

The interviewer wants a brief, technical explanation of a *write‑optimized temporary index table*—often called a **buffer index**—used in high‑throughput analytics or OLTP systems.  
Assumptions:  
- The buffer index is built on the fly during a query or batch load, not persisted to disk.  
- It’s designed for fast insertions and lookups, with minimal write amplification.

---

**Approach**

1. Define what “write‑optimized” means (e.g., append‑only structures).  
2. Describe typical data layout (hash table, skip list, or LSM tree).  
3. Explain how it feeds into the main index once flushed.  
4. Highlight trade‑offs vs. read‑optimized indexes.

---

**Depth**

A buffer index is an in‑memory, append‑only structure that captures recent writes before they are merged into a stable on‑disk B+tree or other persistent index.  
- **Implementation:** Usually a hash map or a lightweight LSM (Log‑Structured Merge) tree. New keys/values are simply appended to the buffer; no rebalancing is needed.  
- **Lookup Path:** For queries, the system first probes the buffer (O(1) for hash, O(log n) for skip list). If not found, it falls back to the main index.  
- **Flush Policy:** When the buffer reaches a size threshold or at transaction commit, its contents are merged into the persistent index in bulk, amortizing write cost.  

Complexity: Insert is *O(1)* on average; lookup is *O(1) + O(log N)* where *N* is main index size. Merge cost is linear in buffer size.

---

**Edge Cases**

- **Buffer overflow:** If the buffer grows too large (e.g., due to a burst of writes), it can spill into slower memory or disk, degrading performance.  
- **Cache eviction:** Hot keys may be evicted from the buffer before flush, causing repeated lookups in the main index.  
- **Concurrency:** Multiple writers must coordinate access; lock‑free designs (e.g., partitioned hash tables) mitigate contention.

---

**Optimize & Communicate**

To improve, one could use a *tiered LSM* inside the buffer to keep recent writes sorted, reducing merge cost. Also, adaptive thresholds based on write rate can balance latency and throughput.  
When explaining this in an interview, emphasize that a buffer index trades off short‑term read latency for long‑term write amplification, making it ideal for workloads with high insert rates but occasional point queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
