---
qid: vq_2d0d1905a7__fp__local
question: What are the nine different types of Indexes?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 590
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:29:24-05:00'
sources: []
---

### The “nine” index families that solve the *search‑vs‑storage* trade‑off

At its core, an index is a data structure that lets us map a key to one or more rows without scanning every row.  
From first principles there are only three constraints:

1. **Fast lookup** – the cost of `SELECT … WHERE key = ?` must be sub‑linear.  
2. **Update overhead** – inserting, deleting or changing keys should not dominate overall throughput.  
3. **Space vs. speed trade‑off** – more pointers mean faster search but higher write cost.

These constraints give rise to nine canonical index families, each chosen for a particular balance of the three:

| Index | Structure & use‑case | Why it works |
|-------|----------------------|--------------|
| **B‑Tree** | Balanced tree of sorted keys. | Guarantees O(log n) lookup with minimal pointer overhead; optimal for equality/inequality ranges on single columns. |
| **Hash** | Bucketed hash table. | Constant‑time lookups for exact matches; bad for range queries but cheap to update. |
| **GiST (Generalized Search Tree)** | User‑defined node predicates. | Extends B‑Tree concept to arbitrary metrics (e.g., full‑text, geospatial). |
| **SP‑GiST** | Space partitioning GiST. | Handles sparse data and non‑overlapping geometries efficiently. |
| **GIN (Generalized Inverted Index)** | Inverted lists per token. | Excellent for many-to-many relationships like array or JSON containment. |
| **BRIN (Block Range INdexes)** | Summary of key ranges per physical block. | Minimal space, great for large tables where data is naturally clustered by the indexed column. |
| **Bitmap** | Bit vectors mapping rows to values. | Ideal when a few distinct values are queried over many columns; joins become cheap bitwise operations. |
| **R‑Tree** | Hierarchical bounding boxes. | Native support for multi‑dimensional spatial queries (rectangles, circles). |
| **Clustered Index** | Physical ordering of table rows by key. | Eliminates the need for a separate pointer structure—lookups are cache‑friendly but require costly re‑ordering on updates. |

> **Non‑obvious insight:** *A clustered index is not an “index” in the traditional sense; it is a storage layout. Its choice forces the database to trade write latency for read speed, turning the table itself into the lookup structure.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
