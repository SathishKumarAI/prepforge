---
qid: ing_58b0c0cd18__think__local
question: 'Explain: Choosing the Right Index — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 455
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:51:53-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - Identify what “index” means in this context (SQL index, Lucene, vector‑search, etc.).  
   - Assume a typical ML‑driven recommendation service that must retrieve millions of user‑item pairs quickly.  
   - Note constraints: write latency, read throughput, data volume, and consistency needs.

**2. Adopt the “index design triad” framework**  
   - **Data model** (what keys, composite vs single).  
   - **Access patterns** (query types, filters, aggregations).  
   - **Storage & compute trade‑offs** (size of index vs speed, replication).

**3. Step‑by‑step reasoning**  
   1. Map every query type to its key attributes.  
   2. For each attribute decide if it should be a primary key or secondary index.  
   3. Evaluate cardinality: high‑cardinality columns benefit from B‑tree; low‑cardinality from bitmap.  
   4. Consider sharding: hash‑partition on the leading key to balance load.  
   5. Weigh cost of maintaining indexes during model updates versus read latency gains.

**4. Common traps to avoid**  
   - Over‑indexing: each extra index slows writes and consumes storage.  
   - Blindly copying production indices into a dev environment—differences in data skew can mislead tests.  
   - Ignoring cache layers; an efficient index may still be bottlenecked by memory bandwidth.

**5. Sanity‑check & verbalize the plan**  
   - Recount the primary query paths and ensure each has a corresponding fast path.  
   - Verify that maintenance overhead (rebuild frequency) is acceptable for the ML pipeline’s update cadence.  
   - Summarize: “We’ll use a composite B‑tree on (user_id, timestamp) for hot reads, a bitmap index on item_category for filtering, and shard by user hash to keep write traffic balanced.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
