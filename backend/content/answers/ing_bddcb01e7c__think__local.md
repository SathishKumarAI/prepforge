---
qid: ing_bddcb01e7c__think__local
question: 'Explain: Indexing — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 437
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:29:50-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
- Identify what “indexing” means in this context (B‑tree, hash, inverted, etc.).  
- Assume a relational DBMS with typical OLTP/OLAP workloads; note that design choices differ for NoSQL or graph stores.  

**2️⃣ Adopt a layered mental model**  
- **Data layer**: physical storage, page layout, fragmentation.  
- **Index layer**: structure (B‑tree, hash), size, maintenance cost.  
- **Query layer**: planner decisions, statistics, cardinality estimates.  
- **Scalability levers**: vertical (CPU/memory), horizontal (sharding, replication).  

**3️⃣ Step‑by‑step reasoning**  
a. *Measure workload*: read/write ratio, query patterns, hot columns.  
b. *Choose index type*: B‑tree for range queries; hash for equality; inverted for text search.  
c. *Estimate size*: `index_size ≈ n_rows × avg_key_len × overhead`.  
d. *Plan sharding strategy*: key‑based partitioning to keep hot data local, minimize cross‑node lookups.  
e. *Replication & consistency*: read‑scales with replicas; write‑latency trade‑offs (synchronous vs asynchronous).  

**4️⃣ Avoid common traps**  
- Don’t over‑index: each index slows writes and consumes I/O.  
- Beware of “index bloat” from fragmentation; schedule rebuilds or online maintenance.  
- Assume statistics stay fresh; stale stats mislead the optimizer, hurting scalability.  

**5️⃣ Sanity‑check & verbalize**  
- Re‑run a typical query plan: does it hit the right index?  
- Verify that adding/removing an index changes write latency as expected.  
- Summarize: “By aligning index choice with workload, keeping indexes lean, and sharding on hot keys, we scale read throughput linearly while bounding write amplification.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
