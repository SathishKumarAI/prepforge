---
qid: ing_511247b7f9__fp__local
question: 'Explain: Costs of Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 418
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:57:31-05:00'
sources: []
---

**Why indexing is expensive – a first‑principles view**

An index is essentially a *lookup table* that maps key values to row locations.  
When a query arrives, the engine performs three logical steps:

1. **Search the index** – a binary tree or hash lookup costs *O(log n)* (tree) or *O(1)* (hash), but each comparison requires reading a page from disk or memory.
2. **Fetch the target rows** – once keys are found, the engine reads the actual data pages.
3. **Maintain the index on write** – every insert, delete or update must propagate to all relevant index nodes.

From an *information‑theoretic* standpoint, each index entry stores a key plus a pointer; this is extra entropy that must be written and kept in sync with the base table. The cost scales with:

| Cost | Reason |
|------|--------|
| **Disk I/O** | Index pages are read/written separately from data pages. |
| **CPU cycles** | Tree traversal or hash hashing, plus pointer chasing. |
| **Lock contention** | Multiple writers contend for the same index node, leading to blocking. |
| **Cache pollution** | Large indexes evict useful data pages from RAM. |

A non‑obvious insight: *the “write amplification” of an index is a geometric series*.  
If a B‑tree has fan‑out *f*, updating a leaf forces rebalancing up the tree, touching roughly log_f n nodes; each node write may trigger another rewrite higher up. This cascades, so the total bytes written per logical update can exceed the size of the inserted row by an order of magnitude. Recognizing this cascade explains why “wide” indexes (high fan‑out) trade off read speed for lower write amplification—a subtle design choice that often goes unnoticed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
